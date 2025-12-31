import { NextResponse } from "next/server";
import { db } from "@/db";
import { certificates } from "@/db/schema";

export async function GET() {
  try {
    const allCertificates = await db.select().from(certificates);
    return NextResponse.json(allCertificates);
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return NextResponse.json(
      { error: "Failed to fetch certificates" },
      { status: 500 }
    );
  }
}

