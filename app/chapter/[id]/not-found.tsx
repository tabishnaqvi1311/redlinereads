import Link from "next/link";
import { HiFaceFrown } from "react-icons/hi2";

export default function NotFound() {
    return (
        <main className="flex justify-center items-center flex-col h-[86vh]">
            <div className="text-white flex gap-5 items-center">
                <span><HiFaceFrown size={90} /></span>
                <div className="flex flex-col justify-center gap-5">
                    <span className="font-bold text-3xl">404</span>
                    <span className="">Page Not Found! Are you sure it exists?</span>
                </div>
            </div>
        </main>
    )
}