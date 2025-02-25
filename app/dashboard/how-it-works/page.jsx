"use client";
import { How_It_Works_Steps } from "@/utils/data";
import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
function How_It_Works() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold">How it works?</h1>
        <p className="text-muted-foreground">
          Learn how to use AI Interview Mocker
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2"
      >
        {How_It_Works_Steps.map((step, index) => (
          <Card
            key={index}
            className="p-6 cursor-pointer transform transition duration-300 hover:scale-[1.05] hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}

export default How_It_Works;
