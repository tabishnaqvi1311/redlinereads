import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongodb";
import Chapter from "@/lib/models/Chapter";

export async function GET(){
    await connectToMongo();
    const chapters = await Chapter.find({});
    return NextResponse.json({chapters}, {status: 200});
}