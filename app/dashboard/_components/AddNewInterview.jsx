"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAiModal";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobexp, setJobexp] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  // console.log(user)
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobexp);

    const inputPrompt =
      "Job position: " +
      jobPosition +
      " , Job Description: " +
      jobDesc +
      " , Years of experience : " +
      jobexp +
      ", Depend on this give me " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " interview questions and there answers in json format";

    const result = await chatSession.sendMessage(inputPrompt);
    const MockJsonResponse = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    console.log(JSON.parse(MockJsonResponse));
    setJsonResponse(MockJsonResponse);
    if (MockJsonResponse) {
      const res = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResponse,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobexp,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD-MM-YYYY"),
        })
        .returning({ mockId: MockInterview.mockId });

      console.log("Inserted ID : ", res);
      if(res){
        setIsOpen(false)
        router.push('/dashboard/interview' + res[0]?.mockId)
      }
    } else {
      console.log("Error");
    }
    setLoading(false);
  };
  return (
    <div>
      <Dialog open={isOpen}>
        <DialogTrigger asChild>
          <div
            className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
            onClick={() => setIsOpen(true)}
          >
            <h2 className="font-bold text-lg text-center">+ Add New</h2>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>
              Tell us more about the job you are interviewing
            </DialogTitle>
            <DialogDescription>
              Add details about the job position, your skills, and years of
              experience.
            </DialogDescription>
            <div>
              <form onSubmit={onSubmit} className="text-gray-500">
                <div className="my-3">
                  <label>Job Position/Role Name</label>
                  <Input
                    type="text"
                    placeholder="Ex. Full Stack Developer"
                    required
                    onChange={(event) => setJobPosition(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label>Job Description/Tech stack in short</label>
                  <Textarea
                    placeholder="Ex. React , Angular , Node Js , MySql etc"
                    required
                    onChange={(event) => setJobDesc(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label>No. of years of experience</label>
                  <Input
                    type="number"
                    placeholder="5"
                    required
                    onChange={(event) => setJobexp(event.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-5 mt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {loading ? (
                      <>
                        <Loader2Icon className="animate-spin" />
                        "Generating from AI"
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
