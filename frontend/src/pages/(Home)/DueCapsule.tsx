export default function DueCapsule({ count, category, important }) {
    return (
        <div className="w-full h-full flex flex-col justify-end py-2 items-center shadow-md border border-accent-blue/80 p-2 relative rounded-md">
            <div className="flex justify-center items-center w-full h-full">
                <span className={`${important ? "text-5xl" : "text-3xl"} text-accent-blue`}>{count}</span>
            </div>
            <span className="text-base text-gray-500">{count != 1 ? "Tasks" : "Task"} {category}</span>
        </div>
    )
}