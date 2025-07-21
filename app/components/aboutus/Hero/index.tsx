"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
  return (
    <div className="min-h-screen relative">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-us/about-us-bg.jpg"
          alt="Red gradient background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Responsive zentrierter Inhalt */}
      <div className="relative z-10 flex items-start justify-center min-h-screen 
                      pt-[55vh] sm:pt-[50vh] md:pt-[45vh] lg:pt-[46vh] xl:pt-[40vh]">
        <main className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
                <HeroHighlight>
                    <motion.h1
                        initial={{
                        opacity: 0,
                        y: 20,
                        }}
                        animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                        }}
                        transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
                    >
                    Wir helfen Unternehmen{" "}
                        <Highlight className="text-neutral-100 dark:text-white">
                        digital unabhängig zu werden
                        </Highlight>
                    </motion.h1>
                </HeroHighlight>
            </div>
          </div>
        </main>
        {/* Boxen unten links */}
        <div className="absolute left-0 bottom-0 flex">
          {/* Erste Box */}
          <div className="text-white px-4 py-5 shadow-lg"
          style={{ backgroundColor: "#1a1a1a" }}
          onClick={() => {
              const section = document.getElementById("services");
              if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Erfahren Sie mehr über uns
          </div>
            {/* Zweite Box mit Pfeil */}
            <div
            className="text-white px-5 py-4 shadow-lg flex items-center cursor-pointer"
            style={{ backgroundColor: "#000000" }}
            onClick={() => {
              const section = document.getElementById("services");
              if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >
            <ChevronDown
              className="animate-bounce"
              size={32}
            />
            </div>
        </div>
        </div>
        </div>
  )
}
