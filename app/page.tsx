//a page is a UI unique to a route
"use client"
import { Suspense } from "react";
import { ChapterCardLoadingSkeleton } from "./ui/skeletons";
import ChapterCard from "./ui/ChapterCard";

export default function Page() {

  return (
    <main className="p-20 text-gray-200">
      <h1 className="text-2xl font-bold mb-10">List Of Chapters</h1>
      <Suspense fallback={<ChapterCardLoadingSkeleton />}>
        <ChapterCard />
      </Suspense>
    </main >
  )
}