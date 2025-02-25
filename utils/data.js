import { Bot, MessageSquare, Play, Star } from "lucide-react";
export const How_It_Works_Steps = [
  {
    icon: Play,
    title: "Start a Mock Interview",
    description:
      "Choose your desired role and experience level to begin the interview session.",
  },
  {
    icon: MessageSquare,
    title: "Answer Questions",
    description:
      "Respond to AI-generated questions tailored to your selected role.",
  },
  {
    icon: Bot,
    title: "Get AI Feedback",
    description:
      "Receive instant feedback on your responses and areas for improvement.",
  },
  {
    icon: Star,
    title: "Track Progress",
    description: "Monitor your performance and improvement over time.",
  },
];

export const upgradePlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features for getting started",
    features: ["5 mock interviews per month", "Basic question bank", "Standard feedback", "Email support"],
  },
  {
    name: "Pro",
    price: "$19",
    description: "Everything in Free, plus advanced features",
    features: [
      "Unlimited mock interviews",
      "Advanced question bank",
      "Detailed feedback & analytics",
      "Priority support",
      "Custom interview scenarios",
    ],
  },
]