"use client"
import React from 'react'
import Image from 'next/image'
import { ProjectCard } from "@/components/ui/Project-card"

const projects = [
  {
    title: "RG Consulting",
    imageSrc: "/images/Projekte/bento-grid-1.jpg",
    link: "https://nexsolve.ch",
  },
  {
    title: "MC Donalds",
    imageSrc: "/images/Projekte/bento-grid-2.jpg",
    link: "https://burgring.ch",
  },
]

const Projekte = () => {
  return (
    <section id="projekte" className="px-4 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          {/* Vertical Text */}
            <div className="hidden lg:block">
              <div className="text-sm text-gray-400 tracking-widest transform rotate-0">
                Unsere Projekte sprechen für sich
              </div>
            </div>
          <div className="flex items-start gap-8">

            {/* Main Content */}
            <div className="grid sm:grid-cols-2">
              <h1 className="text-4xl lg:text-4xl font-bold text-red-500 mb-4">
                Wir begleiten Unternehmen auf dem Weg zu moderner, <br></br>funktionierender IT.
              </h1>
              <div className="grid grid-cols-4 gap-8 relative max-w-4xl mx-auto">
                <div className="col-span-2 row-span-1 self-end -rotate-2 scale-95">
                  <ProjectCard
                    title={projects[0].title}
                    imageSrc={projects[0].imageSrc}
                    link={projects[0].link}
                  />
                </div>
                <div className="col-span-2 row-span-1 -translate-y-8 rotate-3 scale-90 z-10">
                  <ProjectCard
                    title={projects[1].title}
                    imageSrc={projects[1].imageSrc}
                    link={projects[1].link}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-16 border-gray-300" />
    </section>
  )
}

export default Projekte