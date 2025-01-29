"use client"
import { Lightbulb, Volume2 } from "lucide-react";
import React, { useState } from "react";

function QuestionSection({ mockInterviewQuestion , activeQuestionIndex}) {
    if (!mockInterviewQuestion || !mockInterviewQuestion) {
        return <div>No questions available or loading...</div>;
      }
      
  console.log("interview Question:", mockInterviewQuestion);

  function textToSpeech (text){
    if("speechSynthesis" in window){
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech)
    }
    else{
        alert("Your browser does not text to speech")
    }
  }
  
  return mockInterviewQuestion && (
    <div className="p-5 border rounded-lg">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {mockInterviewQuestion ? (
          mockInterviewQuestion.map((questionObj, index) => (
            <div key={index}>
              <h3 className={`p-2 xl:py-5 lg:py-3 md:py-4 border rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex === index && "bg-primary text-white"}`}>Question #{index + 1}</h3>
            </div>
          ))
        ) : (
          <div>No questions available</div>
        )}
      </div>
      <div>
        <h2 className="my-5 text-md lg:text-lg font-semibold">{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className="cursor-pointer text-primary" onClick={() => textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>
      </div>
      <div className="border rounded-lg p-5 bg-blue-100 mt-10">
        <h2 className="flex gap-2 items-center text-primary">
            <Lightbulb/>
            <strong>Note :</strong>
        </h2>
        <h2 className="text-primary p-2">Click on Record Answer when you want to answer the question. At the end of the interview we will give you the feedback along with correct answer for each of question and your answer to compare it</h2>
      </div>
    </div>
  );
}

export default QuestionSection;
