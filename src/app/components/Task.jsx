import React from "react";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import useTaskStore from "@/src/store/useTaskStore";


const Task = ({ id, projectId, onDelete }) => {
    const { getTasks, updateTask } = useTaskStore();
    const task = getTasks(projectId).find((t) => t.id === id);
  
    if (!task) return null; // task deleted or doesn't exist
  
    const categories = ["Ongoing", "Complete", "cat3", "cat4"]

    const handleUpdate = (field, value) => {
        
        updateTask(projectId, id, {...task, [field]: value})
    }
    
    return(
        
        <div className="relative w-full bg-gray-100 border rounded-xl p-4 space-y-shadow-md">
            {console.log("Rendering Task:", task)}
            {/**task state */}
            <p></p>
            {/*delete button*/}
            <button onClick={() => onDelete(id)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
                <Trash2 size={20}/>
                
            </button>

            {/*title*/}
            <input type="text"
                    value={task.title}
                    placeholder="New Task"
                    onChange={(e) => {
                        handleUpdate("title", e.target.value)
                    }} 
                    className="w-full text-lg font-semibold bg-transparent border-b border-gray-300 focus:outline-none"
            />

            {/*details area*/}
            <textarea value={task.details}
                        onChange={(e) => {
                            handleUpdate("details", e.target.value)
                        }} 
                        placeholder="Details"
                        className="w-full resize-none bg-transparent border rounded-lg p-2 focus:outline-none text-sm">

            </textarea>

            {/**due date */}
            <div>
                <label className="">Due Date</label>
                <input type="text"
                        value={task.dueDate}
                        onChange={(e) => {
                            handleUpdate("dueDate", e.target.value)
                        }} 
                        className="border rounded px-2 py-1 text-sm" />
            </div>

            {/**category tag */}
            <div>
                {categories.map((cat) => (
                    <span key={cat} onClick={() => {
                                        handleUpdate("taskState", cat)
                                    }}
                    className={`px-2 py-1 text-xs rounded-full cursor-pointer 
                                ${task.taskState === cat 
                                ? "bg-purple-500 text-white" 
                                : "bg-gray-200 hover:bg-gray-300" }`}>
                        {cat}

                    </span>
                ))}
            </div>


        </div>
    )
}

export default Task