import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./schema"
const sql = neon(process.env.NEXT_PUBLIC_CLERK_DRIZZEL_DB_URL);
export const db = drizzle(sql , {schema});

export function normalizeInterviewData(data) {
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.interviewQuestions)) {
      return data.interviewQuestions;
    } else {
      return [];
    }
  }