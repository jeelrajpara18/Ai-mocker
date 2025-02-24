"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { use, useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {
    const {user} = useUser();
    const [inteviewList , setInterviewList] = useState([]);

    useEffect(() => {
        user && getInterviewDetails()
    },[user])

    const getInterviewDetails = async() => {
        const result = await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id))

        setInterviewList(result)
        console.log(result);
    }
  return (
    <div className="space-y-8">

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Previous Mock Interviews</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inteviewList.map((interview, i) => (
              <InterviewItemCard key={i} interview = {interview}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default InterviewList