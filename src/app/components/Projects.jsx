import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import useTaskStore from "../../store/useTaskStore";


const Projects = () => {

    const projects =["Project1", "Project2", "Project3", "Project4", "Project5", "Project6", "Project7", "Project8", "Project9", "Project10"];
    const [selectedCategory, setSelectedCategory] = useState("Ongoing")
    const {tasks} = useTaskStore()
    const pathname = usePathname();
    const currentProject = pathname.split("/")[1]; // Extract the current project from the URL



    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">projects</h2>
            <nav className="flex flex-col space-y-2">
                {projects.map((pro) => (
                    
                    <Link 
                        key={pro} 
                        href={`/${pro}`} 
                        className={`w-full px-4 py-2 rounded-full text-left border-2 transition
                            ${
                                currentProject === pro
                                ? "bg-purple-500 text-white border-transparent"
                                : "bg-transparent hover:bg-purple-500 text-purple-500 hover:text-white border-purple-500"
                            }`} >
                        {pro} ({tasks[pro]?.length || 0} tasks)
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Projects