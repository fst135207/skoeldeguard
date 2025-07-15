import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  imageSrc: string
  link?: string
}

export function ProjectCard({ title, imageSrc, link }: ProjectCardProps) {
  return (
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative"
    >
      <div className="overflow-hidden rounded-lg shadow-md">
        <Image
          src={imageSrc}
          alt={title}
          width={350}
          height={220}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center mt-3 text-sm text-gray-800">
        <span>{title}</span>
        {link && <ArrowUpRight className="w-4 h-4" />}
      </div>
      
    </a>
  )
}
