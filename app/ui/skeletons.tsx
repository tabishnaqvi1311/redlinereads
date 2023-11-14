export function ChapterCardLoadingSkeleton() {
    return (
        <div className="p-20 text-gray-200">
            <div className='flex flex-col gap-5 items-center'>
                <div className="bg-gray-200 w-1/2  items-center rounded-lg p-5 animate-pulse shadow-sm">
                </div>
                <div className="bg-gray-200 w-1/2  items-center rounded-lg p-5 animate-pulse shadow-sm">
                </div>
                <div className="bg-gray-200 w-1/2  items-center rounded-lg p-5 animate-pulse shadow-sm">
                </div>
                <div className="bg-gray-200 w-1/2  items-center rounded-lg p-5 animate-pulse shadow-sm">
                </div>
            </div>
        </div>
    )
}