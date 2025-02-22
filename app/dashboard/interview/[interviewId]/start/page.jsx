"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { use, useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Dynamically import RecordAnsSection with SSR disabled
const RecordAnsSection = dynamic(
  () => import("./_components/RecordAnsSection"),
  { ssr: false } // Disable SSR for this component
);

function StartInterview({ params }) {
  const { interviewId } = use(params);

  const [interviewData, setInterviewData] = useState(null);
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    if (interviewId) {
      GetInterviewDetails();
    }
  }, [interviewId]);

  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, interviewId));

      const jsonMockResp = JSON.parse(result[0].jsonMockResp);
      console.log(jsonMockResp);
      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <QuestionSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        {/* Render RecordAnsSection only on the client side */}
        <RecordAnsSection
          mockInterviewQuestion={mockInterviewQuestion}
          interviewData={interviewData}
          activeQuestionIndex={activeQuestionIndex}
        />
      </div>
      <div className="flex justify-end gap-2">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQuestion?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
          <Link href={'/dashboard/interview/' + interviewData?.mockId+ '/feedback'}>
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
