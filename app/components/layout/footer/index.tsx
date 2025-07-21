import Link from "next/link"
import { MapPin, Laptop } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-200 text-black py-12 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 pb-8 border-b border-gray-700">
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <div className="text-3xl font-bold">
            <span className="text-black">SKÖLD</span>
            <span className="text-accent-blue">GUARD</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <Link href="#" className="hover:underline text-blue-950">
            Über uns
          </Link>
          <Link href="#" className="hover:underline text-blue-950">
            Services
          </Link>
          <Link href="#" className="hover:underline text-blue-950">
            Zertifikate
          </Link>
        </div>

        {/* Wollerau Address */}
        <div className="flex flex-col space-y-3 items-end">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 mt-1" />
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Bern</span>
              <p className="text-blue-950">Sihleggstrasse 23</p>
              <p className="text-blue-950">8832 Wollerau</p>
              <p className="text-blue-950">Schweiz</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Links & Copyright */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-8 text-gray-400 text-sm">
        <div className="mb-4 md:mb-0">
          <p>©2025 Copyright SKÖLDGUARD</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:underline">
            AGB
          </Link>
          <Link href="#" className="hover:underline">
            Datenschutz
          </Link>
          <Link href="#" className="hover:underline">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  )
}
