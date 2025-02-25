"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Bot, CheckCircle, PlayCircle, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Bot className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">AI Interview Mocker</span>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Features
            </Link>

            <Link
              href="#howitworks"
              className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("howitworks")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How it works
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full flex flex-col items-center justify-center h-screen">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Master Your Interview Skills with AI
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Practice interviews with our AI-powered mock interviewer.
                    Get real-time feedback and improve your confidence.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  className="space-x-4"
                >
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/80"
                    size="lg"
                    onClick={() => router.push("/dashboard")}
                  >
                    Get Started Free
                    <PlayCircle className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
          <section
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
            id="features"
          >
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Smart Features
                  </div>
                  <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  >
                    Practice Like It's Real
                  </motion.h2>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our AI interviewer adapts to your responses, providing a
                    realistic interview experience tailored to your industry and
                    experience level.
                  </p>
                </div>
                <div className="grid gap-4 md:gap-8">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">
                        Realistic AI Conversations
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Experience natural, flowing conversations with our
                        advanced AI interviewer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Instant Feedback</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Get detailed feedback on your responses, body language,
                        and communication skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">
                        Industry-Specific Questions
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Practice with questions tailored to your industry and
                        role
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32" id="howitworks">
            <div className=" flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Start practicing in minutes with our simple three-step process
                </p>
              </motion.div>

              <div className="grid justify-center items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">1. Create Your Profile</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Tell us about your industry, experience level, and target
                    role
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Bot className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">2. Start Practicing</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Begin your interview session with our AI interviewer
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">3. Get Feedback</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Receive detailed feedback and suggestions for improvement
                  </p>
                </div>
              </div>
            </div>
          </section>
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Ready to Ace Your Interview?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Start practicing now and build your confidence for your next
                    interview.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                    onClick={() => router.push("/dashboard")}
                  >
                    Start Free Practice
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} AI Interview Mocker. All rights
            reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
