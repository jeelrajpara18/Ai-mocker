"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import webcam from "../../../../../../public/webcam.jpg";
import Webcam from "react-webcam";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAiModal";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
function RecordAnsSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const [userAnswer, setUserAnswer] = useState("");
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    results.map((result) => {
      setUserAnswer((prevAns) => prevAns + result?.transcript);
    });
  }, [results]);
  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      updateUserAnswer();
    }
  }, [userAnswer]);
  const startAndStopRecording = () => {
    if (isRecording) {
      setLoading(true);
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };
  const updateUserAnswer = async () => {
    console.log("User Answer", userAnswer);
    setLoading(true);
  
    const feedbackPrompt = `Question: ${
      mockInterviewQuestion?.interviewQuestions?.[activeQuestionIndex]?.question
    }, User Answer: ${userAnswer}. Based on this, please provide a JSON response with fields 'rating' and 'feedback' for improvement.`;
  
  
    let result;
    let attempts = 0;
    const maxAttempts = 3; // Retry up to 3 times
  
    while (attempts < maxAttempts) {
      try {
        result = await chatSession.sendMessage(feedbackPrompt);
        if (result) break; // If successful, exit loop
      } catch (error) {
        console.error("Gemini API Error:", error);
        attempts++;
        await new Promise((res) => setTimeout(res, 2000 * attempts)); // Exponential backoff
      }
    }
  
    if (!result) {
      toast("Failed to fetch feedback. Please try again later.");
      setLoading(false);
      return;
    }
  
    try {
      const mockJsonResponse = result.response
        .text()
        .replace("```json", "")
        .replace("```", "");
  
      const JsonFeedbackResp = JSON.parse(mockJsonResponse);
  
      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion?.[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion?.[activeQuestionIndex]?.answer,
        userAns: userAnswer,
        feedback: JsonFeedbackResp?.feedback,
        rating: JsonFeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      });
  
      if (resp) {
        toast("User Answer recorded successfully");
        setUserAnswer('')
        setResults([])
      }
    } catch (error) {
      console.error("Error parsing response:", error);
      toast("Error processing feedback. Please try again later.");
      setResults([]);
    }
  
    setUserAnswer("");
    setLoading(false);
  };
  
  return (
    mockInterviewQuestion && (
      <div>
        <div className="flex flex-col mt-20 mb-10 justify-center items-center p-5 bg-black rounded-lg">
          {/* Add a wrapper for proper alignment */}
          <div className="relative flex justify-center items-center">
            {/* Image */}
            <Image
              src={webcam}
              height={200}
              width={200}
              alt=""
              className="absolute"
            />
            {/* Webcam */}
            <Webcam
              mirrored
              className=""
              style={{ height: 300, width: "100%", zIndex: 10 }}
            />
          </div>
        </div>
        <div className="text-center">
          <Button variant="outline" onClick={startAndStopRecording}>
            {isRecording ? (
              <p className="flex text-red-600 gap-2 items-center">
                <StopCircle /> Stop Recording
              </p>
            ) : (
              <p className="flex text-primary gap-2 items-center">
                <Mic /> Record Answer
              </p>
            )}
          </Button>
          {/* <div>
            <Button onClick={() => console.log(userAnswer)}>Show Answer</Button>
          </div> */}
        </div>
      </div>
    )
  );
}

export default RecordAnsSection;
