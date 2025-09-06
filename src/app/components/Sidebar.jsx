import React from "react";
import Categories from "./Categories"
import Projects from "./Projects"



const Sidebar = () => {

    return (
        <aside className="w-72 bg-white text-black flex flex-col p-5 border-r-2 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-5">Home</h1>

                <div className="mt-5 w-full">
                    <Categories/>
                </div>

                <div className="mt-5 w-full">
                    <Projects/>
                </div>
            </aside>
    )
}

export default Sidebar