"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import useCategoryStore from "../../store/useCategoryStore"
import Task from "../components/Task"
import Sidebar from "../components/Sidebar"

const Home = () => {

    const {project, category} = useParams()

    const [tasks, setTask] = useState([])
    const {selectedCategory} = useCategoryStore()

    //adding task
    const addTask = () => {
        setTask([...tasks, {id : Date.now(), project, category }])
    }

    //deleting task
    const deleteTask = (id) => {
        setTask(tasks.filter((task) => task.id !== id))
    }

    //filter tasks
    const filteredTask = selectedCategory === "All"
                            ? tasks : tasks.filter((t) => t.category === selectedCategory)

    


    return (
        
        <main className="flex h-screen">
            {categories.length}
            {/**sidebar */}
            <Sidebar/>

            {/**project */}

            <section className="flex-1 bg-white text-black flex flex-col p-5 space-y-2 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-5 text-black flex items-start">Project {project}</h1>
                <h1 className="text-l font-bold mb-5 text-black flex items-start">{category}</h1>

                <button onClick={addTask} 
                        className="self-start bg-purple-500 text-white hover:bg-purple-400 px-4 py-2 rounded-lg">+Add Task</button>

                {/**reder task */}
                <div className="w-full space-y-4">
                    {filteredTask.map((task) =>(
                        <Task key={task.id} id={task.id} onDelete={deleteTask} category={task.category}/>
                    ))}
                </div>

            </section>
        </main>
    )
}

export default Home