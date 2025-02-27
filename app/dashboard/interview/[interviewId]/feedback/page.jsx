"use client";
import React, { use, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const { interviewId } = use(params);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, [interviewId]);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-3 space-y-5">
      <div className="text-center">
        <h1 className="lg:text-4xl md:text-4xl font-bold text-green-500 text-2xl">
          Congratulations!
        </h1>
        <p className="text-2xl font-semibold text-gray-800">
          Here is your interview feedback
        </p>
      </div>
      {feedbackList.length == 0 ? (
        <h2 className="font-bold text-xl text-gray-500">No Interview Feedback Record Found</h2>
      ) : (
        <>
          {/* <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Your overall interview rating
                </h2>
                <Badge variant="outline" className="text-lg px-4 py-1">
                  7/10
                </Badge>
              </div>
              <Progress value={70} className="h-3" />
            </div>
          </Card> */}

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">
              Find below interview questions with correct answers, your answers
              and feedback for improvement
            </h3>

            <Accordion type="single" collapsible className="space-y-4">
              {feedbackList &&
                feedbackList.map((item, list) => (
                  <AccordionItem
                    key={list}
                    value={`q-${item.question}`}
                    className="border rounded-lg px-6 py-2"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-4 text-left">
                        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                        <div className="space-y-2">
                          <p className="font-medium">{item.question}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                              Rating:
                            </span>
                            <Badge
                              variant={
                                list.rating >= 5 ? "default" : "destructive"
                              }
                              className="text-xs"
                            >
                              {item.rating}/10
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700">
                          Your Answer:
                        </h4>
                        <p className="text-gray-600 bg-gray-50 p-4 rounded-md">
                          {item.userAns}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-700">
                          Feedback:
                        </h4>
                        <p className="text-gray-600 bg-gray-50 p-4 rounded-md">
                          {item.feedback}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
            </Accordion>
            <div className="text-center">
              <Button onClick={() => router.replace("/dashboard")}>
                Go Home
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Feedback;
