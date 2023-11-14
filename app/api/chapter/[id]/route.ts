import Chapter from "@/lib/models/Chapter";
import { connectToMongo } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request | NextRequest, {params}: {params : {id : string}}){
    const id = params.id;
    await connectToMongo();
    const chapter = await Chapter.find({chapterNumber: id});
    return NextResponse.json({chapter}, {status: 200});
}