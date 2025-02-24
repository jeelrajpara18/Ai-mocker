"use client"
import React from "react";
import { Clock, MessageSquare, PlayCircle, Plus, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
function InterviewItemCard({ interview }) {
  const router = useRouter();

  const onStart = () => {
    router.push("/dashboard/interview/" + interview?.mockId);
  };

  const onFeedbackPress = () => {
    router.push("/dashboard/interview/" + interview.mockId + "/feedback");
  };
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg text-primary font-bold">
          {interview.jobPosition}
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="h-4 w-4" />
          {interview.jobExperience} Years
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          Created At: {interview.createdAt}
        </div>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={onFeedbackPress}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Feedback
        </Button>
        <Button size="sm" className="flex-1" onClick={onStart}>
          <PlayCircle className="h-4 w-4 mr-2" />
          Start
        </Button>
      </CardFooter>
    </Card>
  );
}

export default InterviewItemCard;
