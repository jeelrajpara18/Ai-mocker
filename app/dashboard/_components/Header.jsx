"use client";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "../../../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  Bot,
  Crown,
  HelpCircle,
  LayoutDashboard,
  MessagesSquare,
} from "lucide-react";

export function SidebarDemo({ children }) {
  const users = useUser();
  // console.log(users?.user?.fullName);
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    // {
    //   label: "Questions",
    //   href: "/dashboard/questions",
    //   icon: MessagesSquare,
    // },
    {
      label: "Upgrade",
      href: "/dashboard/upgrade",
      icon: Crown,
    },
    {
      label: "How it works?",
      href: "/dashboard/how-it-works",
      icon: HelpCircle,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-200 rounded-md transition"
                >
                  <link.icon className="h-5 w-5" /> {/* Navigation icon */}
                  <span>{link.label}</span> {/* Navigation text */}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <UserButton />
            {users?.user?.fullName || "User not found"}
          </div>
        </SidebarBody>
      </Sidebar>
      <main className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll">
        {children}
      </main>
      {/* <Dashboard /> */}
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        {/* <Image src={"/logo.svg"} width={160} height={100} alt="logo" /> */}
        <div className="flex">
          <Bot className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">AI Interview Mocker</span>
        </div>
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
