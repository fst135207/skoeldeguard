import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/Hero/bg-hero.png" alt="Red gradient background" fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Hero Section */}
        <main className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
                Ihr Partner für Digitale Arbeitsplatzlösungen
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
