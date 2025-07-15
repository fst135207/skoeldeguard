"use client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen relative">
      {/* Hintergrundbild */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero/bg-hero.png"
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
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                Ihr Partner für Digitale Arbeitsplatzlösungen
              </h1>
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
            Lassen Sie uns gemeinsam mehr bewirken
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
