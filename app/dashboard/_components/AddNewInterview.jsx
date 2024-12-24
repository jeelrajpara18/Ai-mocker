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

function AddNewInterview() {
  const [isOpen, setIsOpen] = useState(false);
  const [jobPosition , setJobPosition] = useState();
  const [jobDesc , setJobDesc] = useState(); 
  const [jobexp , setJobexp] = useState(); 

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(jobPosition ,jobDesc , jobexp)
  }
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
                  <label>
                    Job Position/Role Name
                  </label>
                  <Input type="text" placeholder="Ex. Full Stack Developer" required onChange={(event) => setJobPosition(event.target.value)}/>
                </div>
                <div className="my-3">
                  <label>
                    Job Description/Tech stack in short
                  </label>
                  <Textarea placeholder="Ex. React , Angular , Node Js , MySql etc" required onChange={(event) => setJobDesc(event.target.value)}/>
                </div>
                <div className="my-3">
                  <label>
                    No. of years of experience
                  </label>
                  <Input type="number" placeholder="5" required onChange={(event) => setJobexp(event.target.value)}/>
                </div>
                <div className="flex justify-end gap-5 mt-4">
                  <Button variant="ghost" onClick={() => setIsOpen(false)}>
                    Cancel
                  </Button>
                  <Button>Start Interview</Button>
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
