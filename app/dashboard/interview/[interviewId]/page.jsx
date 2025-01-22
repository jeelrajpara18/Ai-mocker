"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { use, useEffect, useState } from "react";
import Webcam from "react-webcam";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Lightbulb,
  WebcamIcon,
  CheckCircle2,
  Info,
  Timer,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
function Interview({ params }) {
  const unwrappedParams = use(params);
  const { interviewId } = unwrappedParams;
  const [interviewData, setInterviewData] = useState(null); // Default to null
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  const [hasMediaAccess, setHasMediaAccess] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // console.log("Interview Id", interviewId); // Debug interviewId
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

      // console.log("Interview Details", result[0]); // Log the result
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };
  console.log("Interview Data", interviewData);
  if (!interviewData) {
    return <div>Loading interview details...</div>;
  }

  const enableWebCam = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setWebCamEnabled(true);
      setHasMediaAccess(true);
    } catch (error) {
      console.error("Error accessing webcam and microphone:", error);
      setHasMediaAccess(false);
    }
  };

  const jobDescription = interviewData.jobDesc
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the array back into a single string
  console.log(jobDescription);

  const checklistItems = [
    "Find a quiet environment",
    "Ensure good lighting",
    "Test your microphone",
    "Have water nearby",
    "Review job description",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-5">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Let&apos;s Get Started</h1>
        <p className="text-gray-500">
          Prepare for your AI-powered mock interview
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Job Details Card */}
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">Position Details</h2>
              <Badge variant="secondary">{interviewData.jobPosition}</Badge>
            </div>
            <div className="space-y-3">
              {/* <div className="flex justify-between items-center">
                <span className="text-gray-500"></span>
                <span className="font-medium">Full Stack Developer</span>
              </div> */}
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Tech Stack</span>
                <div className="space-x-2">
                  <Badge variant="outline">{jobDescription}</Badge>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Years of Experience</span>
                <span className="font-medium">
                  {interviewData.jobExperience}
                </span>
              </div>
            </div>
          </Card>

          {/* Information Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <Lightbulb className="w-6 h-6 mt-1 flex-shrink-0 text-yellow-500" />
              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  Information
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Your video is never recorded or stored</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </h2>
                <p className="text-gray-600 mt-2">
                  Enable Video Web Cam and Microphone to Start your AI Generated
                  Mock Interview. You&apos;ll receive 5 questions to answer,
                  followed by a detailed report.
                </p>
              </div>
            </div>

            {/* Interview Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Timer className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">15-20 min</p>
              </Card>
              <Card className="p-4 text-center">
                <MessageSquare className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-gray-500">Questions</p>
                <p className="font-semibold">5 Total</p>
              </Card>
              <Card className="p-4 text-center">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm text-gray-500">Feedback</p>
                <p className="font-semibold">Instant</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Webcam Preview */}
          <Card className="aspect-video relative overflow-hidden bg-gray-50">
            <div>
              {webCamEnabled ? (
                <Webcam
                  // style={{ height: 300, width: 300 }}
                  onUserMedia={() => setWebCamEnabled(true)}
                  onUserMediaError={() => setWebCamEnabled(false)}
                  mirrored
                />
              ) : (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <WebcamIcon className="w-24 h-24 text-gray-400 mb-4" />
                    <p className="text-gray-500">
                      Camera preview will appear here
                    </p>
                  </div>
                </>
              )}
            </div>
          </Card>

          {/* Checklist */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              Preparation Checklist
            </h3>
            <div className="space-y-3">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id={`check-${index}`}
                    className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                    onChange={(e) => {
                      const allChecked =
                        document.querySelectorAll(
                          'input[type="checkbox"]:checked'
                        ).length === checklistItems.length;
                      setIsReady(allChecked);
                    }}
                  />
                  <label htmlFor={`check-${index}`} className="text-gray-600">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </Card>

          {/* Action Button */}
          <Button
            className="w-full h-12 text-lg"
            onClick={enableWebCam}
            // disabled={webCamEnabled}
          >
            {isReady && webCamEnabled ? "Ready to Start" : "Enable Web Cam and Microphone"}
          </Button>

          {!webCamEnabled && (
            <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
              <AlertCircle className="w-4 h-4" />
              <span>Camera and microphone access required to continue</span>
            </div>
          )}
          {/* <Button onClick={() => setWebCamEnabled(true)}>
            Enable Web Cam and Microphone
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default Interview;
