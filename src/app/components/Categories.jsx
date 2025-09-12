"use client"

import { useState } from "react";
import useCategoryStore from "../../store/useCategoryStore"

const Categories = () => {
    const {categories, selectedCategory, setSelectedCategory} = useCategoryStore()
    return (
        <div className="space-y-3">
            <h2 className="text-xl font-semibold">categories</h2>
            <nav className="flex flex-col space-y-2">
                {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1 rounded-full text-sm transition ${
                        selectedCategory === cat
                          ? "bg-purple-500 text-white border-2 border-transparent"
                          : "bg-transparent hover:bg-purple-500 text-purple-500 hover:text-white border-2 border-purple-500"
                      }`}
                    >
                    {cat}
                  </button>
                ))}
            </nav>
        </div>
    )
}

export default Categories