import { getChapter } from "@/lib/actions";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {

    const id = params.id;
    const { chapter } = await getChapter(parseInt(id));

    if(chapter.length === 0) notFound();

    return (
        <main className="p-20 text-2xl font-semibold text-gray-200">
            <>
                <h1>Reading chapter - {chapter[0].chapterNumber}</h1>
                <span className="text-center">{chapter[0].chapterTitle}</span>
                <ul className="flex flex-col justify-center items-center my-10">
                    {
                        chapter[0].pages.map((page: string) => (
                            <li key={page}>
                                <Image src={page} alt="page" width={999999} height={999999} className="w-full"/>
                            </li>
                        ))
                    }
                </ul>
            </>
        </main>
    )
}