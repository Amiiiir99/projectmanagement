import { create } from "zustand";

const useCategoryStore = create((set) => ({
    categories:["All", "Ongoing", "Complete" ,"cat3", "cat4"],
    selectedCategory: "All",

    setSelectedCategory:(category) => set({selectedCategory:category}),
}))

export default useCategoryStore;