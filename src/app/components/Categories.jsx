const Categories = () => {
    const categories =["Ongoing", "Complete", "cat3", "cat4"];

    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">categories</h2>
            <nav className="flex flex-col space-y-2">
                {categories.map((cat) => (
                    <button key={cat} className="w-full bg-purple-500 hover:bg-purple-400 text-white px-4 py-2 rounded-lg text-left">
                        {cat}
                    </button>
                ))}
            </nav>
        </div>
    )
}

export default Categories