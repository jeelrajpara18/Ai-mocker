"use client"
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
function RecordAnsSection({ mockInterviewQuestion , activeQuestionIndex , interviewData}) {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  const [userAnswer , setUserAnswer] = useState("");
  const {user} = useUser();
  useEffect(() => {
    results.map((result) => {
        setUserAnswer(prevAns => prevAns + result?.transcript)
    })
  },[results]);
  const saveUser = async () => {
    if(isRecording){
        stopSpeechToText();
        if(userAnswer?.length<10){
            toast('Error while saving your answer , Please record again!')
            return
        }
        const feedbackPrompt = "Question:" + mockInterviewQuestion?.interviewQuestions?.[activeQuestionIndex]?.question +", User Answer" + userAnswer + "Depend on question and user answer for given , Please give us rating for answer and feedback as area of improvement if any in 3 to 5 lines to improve JSON format with rating field and feedback field"
        
        const result = await chatSession.sendMessage(feedbackPrompt)
        const mockJsonResponse = result.response
        .text()
        .replace("```json", "")
        .replace("```", "");
        
        console.log(mockJsonResponse)
        const JsonFeedbackResp = JSON.parse(mockJsonResponse);

        const resp = await db.insert(UserAnswer)
        .values({
            mockIdRef : interviewData?.mockId,
            question : mockInterviewQuestion?.interviewQuestions?.[activeQuestionIndex]?.question,
            correctAns : mockInterviewQuestion?.interviewQuestions?.[activeQuestionIndex]?.answer,
            userAns : userAnswer,
            feedback : JsonFeedbackResp?.feedback,
            rating : JsonFeedbackResp?.rating,
            userEmail : user?.primaryEmailAddress?.emailAddress,
            createdAt : moment().format('DD-MM-YYYY')
        })
        if(resp){
            toast("User Answer recorded successfully")
        }
    }
    else{
        startSpeechToText();
    }
}
return mockInterviewQuestion && (
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
        <Button
          variant="outline"
          onClick={saveUser}
        >
          {isRecording ? <p className="flex text-red-600 gap-2 items-center">
            <StopCircle/> Stop Recording   
          </p> : 
          <p className="flex text-primary gap-2 items-center">
            <Mic/> Record Answer
          </p>
          }
        </Button>
        <div>
        <Button onClick={() => console.log(userAnswer)}>Show Answer</Button>
        </div>
      </div>
    </div>
  );
}

export default RecordAnsSection;
