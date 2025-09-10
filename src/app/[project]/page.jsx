"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Categories from "../components/Categories"
import Projects from "../components/Projects"
import Task from "../components/Task"
import Sidebar from "../components/Sidebar"
import useCategoryStore from "@/src/store/useCategoryStore"
import useTaskStore from "@/src/store/useTaskStore"

const Home = () => {

    const {project} = useParams()// Get the current project from the URL

    const selectedCategory = useCategoryStore((state) => state.selectedCategory)// Get categories from the store
    const categories = useCategoryStore((state) => state.categories)
    const { addTask, deleteTask, getTasks, updateTask } = useTaskStore(); // Task management functions from the global store
    
    const tasks = getTasks(project); // Get tasks for the current project
    
    //adding task
    const handleAddTask = () => {
        // Add a new task to the global state
        console.log("task called to be added")
        addTask(project, {
            id: Date.now(),
            project,
            title: "", 
            details: "",
            dueDate: "",
            taskState: "Ongoing", // Use the current category as the task state
        });
    };

    //deleting task
    const handleDeleteTask = (taskId) => {
        deleteTask(project, taskId); // Delete the task from the global state
    };

    //updating task
    


    //filter tasks based on project and category
    const filteredTask = getTasks(project).filter((t) =>
        selectedCategory === "All" ? true : t.taskState === selectedCategory
    )

    return (
        
        <main className="flex h-screen">
            {/**sidebar */}
            <Sidebar/>

            {/**project */}

            <section className="flex-1 bg-white text-black flex flex-col p-5 space-y-2 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-5 text-black flex items-start">Project {project}</h1>
                <h1 className="text-l font-bold mb-5 text-black flex items-start">{selectedCategory}</h1>

                <button onClick={handleAddTask} 
                        className="self-start bg-purple-500 text-white hover:bg-purple-400 px-4 py-2 rounded-lg">+Add Task</button>

                {/**reder task */}
                {console.log("PreRendering tasks for project:", project, "with selected category:", selectedCategory, "Filtered tasks:", filteredTask)}
                <div className="w-full space-y-4">
                    {filteredTask.map((task) =>(
                        console.log("Rendering task:", task),
                        <Task   key={task.id} 
                                id={task.id}
                                projectId={project}
                                title={task.title}
                                details={task.details}
                                taskState={task.taskState}
                                onDelete={handleDeleteTask} 
                                onUpdate={updateTask}
                                categories={selectedCategory}/>
                    ))}
                </div>

            </section>
        </main>
    )
}

export default Home