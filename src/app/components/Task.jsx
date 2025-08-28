import React from "react";
import { useState } from "react";
import { Trash2 } from "lucide-react";


const Task = ({id, onDelete}) => {

    const [title, setTitle] = useState("New Task")
    const [details, setDetails] = useState("")
    const [dueDate, setDueDate] = useState("")
    
    return(
        <div className="relative w-full bg-gray-100 border rounded-xl p-4 space-y-shadow-md">
            {/*delete button*/}
            <button onClick={() => onDelete(id)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
                <Trash2 size={20}/>
                
            </button>

            {/*title*/}
            <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full text-lg font-semibold bg-transparent border-b border-gray-300 focus:outline-none"
            />

            {/*details area*/}
            <textarea value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Details"
                        className="w-full resize-none bg-transparent border rounded-lg p-2 focus:outline-none text-sm">

            </textarea>

            {/**due date */}
            <div>
                <label className="">Due Date</label>
                <input type="text"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="border rounded px-2 py-1 text-sm" />
            </div>


        </div>
    )
}

export default Task