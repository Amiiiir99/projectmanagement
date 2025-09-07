import Link from "next/link";
import { useState } from "react";
import useTaskStore from "../../store/useTaskStore";


const Projects = () => {
    const projects =["Project1", "Project2", "Project3", "Project4", "Project5", "Project6", "Project7", "Project8", "Project9", "Project10"];
    const [selectedCategory, setSelectedCategory] = useState("Ongoing")
    const {tasks} = useTaskStore()

    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">projects</h2>
            <nav className="flex flex-col space-y-2">
                {projects.map((pro) => (
                    <Link key={pro} href={`/${pro}`} className="w-full bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg text-left">
                        {pro} ({tasks[pro]?.length || 0} tasks)
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Projects