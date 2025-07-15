import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

export default function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  )
}

const items = [
  {
    // Große Box (oben links) - Nur Bild
    title: undefined, // Titel entfernt
    description: undefined, // Beschreibung entfernt
    header: <img src="/images/Projekte/bento-grid-1.jpg" alt="Innovation" className="h-full w-full object-cover" />,
    className: "md:col-span-2",
    icon: undefined, // Icon entfernt
  },
  {
    // Kleine Box (oben rechts) - Nur Titel
    title: "The Digital Revolution",
    description: undefined, // Beschreibung entfernt
    header: undefined, // Header (Bild) entfernt
    className: "md:col-span-1",
    icon: undefined, // Icon entfernt
  },
  {
    // Kleine Box (unten links) - Nur Titel
    title: "The Art of Design",
    description: undefined, // Beschreibung entfernt
    header: undefined, // Header (Bild) entfernt
    className: "md:col-span-1",
    icon: undefined, // Icon entfernt
  },
  {
    // Große Box (unten rechts) - Nur Bild
    title: undefined, // Titel entfernt
    description: undefined, // Beschreibung entfernt
    header: (
      <img src="/images/Projekte/bento-grid-2.jpg" alt="Communication" className="h-full w-full object-cover" />
    ),
    className: "md:col-span-2",
    icon: undefined, // Icon entfernt
  },
]
