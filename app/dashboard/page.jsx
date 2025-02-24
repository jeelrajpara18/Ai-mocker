import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Create and Start your AI Mockup Interview
        </p>
      </div>

      <div>
        <AddNewInterview />
      </div>
      <div>
        <InterviewList />
      </div>
    </div>
  );
}

export default Dashboard;
