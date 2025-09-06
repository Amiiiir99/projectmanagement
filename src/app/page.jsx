"use client"

import React from "react"
import Sidebar from "./components/Sidebar"


const Page = () => {
    return (
      <main className="flex h-screen">
        <Sidebar/>

        <section className="flex-1 flex items-center justify-center">
          <h1 className="text-2xl font-bold">
            Welcome! Select a project and category.
          </h1>
        </section>
        
      </main>
    )
  }

  export default Page
  