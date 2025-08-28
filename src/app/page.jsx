"use client"

import { useState } from "react"
import Categories from "./components/Categories"
import Projects from "./components/Projects"
import Task from "./components/Task"

const Home = () => {

    const [tasks, setTask] = useState([])

    //adding task
    const addTask = () => {
        setTask([...tasks, {id : Date.now() }])
    }

    //deleting task
    const deleteTask = () => {
        setTask(tasks.filter((task) => task.id !== id))
    }

    return (
        <main className="flex h-screen">
            <aside className="w-72 bg-white text-black flex flex-col p-5 border-r-2">
                <h1 className="text-2xl font-bold mb-5">Home</h1>

                <div className="mt-5 w-full">
                    <Categories/>
                </div>

                <div className="mt-5 w-full">
                    <Projects/>
                </div>
            </aside>

            <section className="flex-1 bg-white text-black flex flex-col p-5 space-y-2">
                <h1 className="text-2xl font-bold mb-5 text-black flex items-start">Project</h1>
                <button onClick={addTask} 
                        className="self-start bg-purple-500 text-white hover:bg-purple-400 px-4 py-2 rounded-lg">+Add Task</button>

                {/**reder task */}
                <div className="w-full space-y-4">
                    {tasks.map((task) =>(
                        <Task key={task.id} id={task.id} onDelete={deleteTask}/>
                    ))}
                </div>

            </section>
        </main>
    )
}

export default Home