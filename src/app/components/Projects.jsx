const Projects = () => {
    const projects =["Project1", "Project2", "Project3", "Project4"];

    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">projects</h2>
            <nav className="flex flex-col space-y-2">
                {projects.map((pro) => (
                    <button key={pro} className="w-full bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg text-left">
                        {pro}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default Projects