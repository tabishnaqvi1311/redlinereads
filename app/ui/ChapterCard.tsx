import { getChapters } from "@/lib/actions";
import { Chapter } from "@/lib/definitions";
import Link from "next/link";

export default async function ChapterCard() {

    const { chapters } = await getChapters();

    return (
        <>
            <div className="flex flex-col gap-5 items-center">
                {chapters && chapters.map((chapter: Chapter) => (
                    <Link
                        href={`/chapter/${chapter.chapterNumber}`}
                        className="flex flex-col items-center rounded lg:w-1/2 w-full shadow-sm cursor-pointer p-2 bg-gray-700 hover:bg-gray-800"
                        key={chapter.chapterNumber}
                    >
                        <h1 className="text-lg font-semibold">
                            One Piece Chapter {chapter.chapterNumber}
                        </h1>
                        <span>{chapter.chapterTitle}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}