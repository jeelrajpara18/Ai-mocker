"use client";
import { motion } from "framer-motion";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Create and Start your AI Mockup Interview
        </p>
      </motion.div>

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
