import { NextResponse } from "next/server";
import { db } from "@/db";
import { personalInfo } from "@/db/schema";

export async function GET() {
  try {
    const info = await db.select().from(personalInfo).limit(1);
    
    if (info.length === 0) {
      return NextResponse.json(
        { error: "Personal info not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(info[0]);
  } catch (error) {
    console.error("Error fetching personal info:", error);
    return NextResponse.json(
      { error: "Failed to fetch personal info" },
      { status: 500 }
    );
  }
}

