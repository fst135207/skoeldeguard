"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Server, Cloud, Globe, BriefcaseBusiness, Wrench, MessageCircleMore } from "lucide-react"

const sidebarItems = [
  { id: "security", name: "Security & Infrastruktur" },
  { id: "cloud", name: "Cloud & Digitalisierung" },
  { id: "it", name: "IT & Support" },
]

const services = [
  {
    id: 1,
    category: "security",
    title: "Managed Services",
    description: "Wir überwachen, aktualisieren und sichern Ihre Systeme – proaktiv und unauffällig.",
    icon: Server,
    color: "text-blue-600",
  },
  {
    id: 2,
    category: "security",
    title: "Netzwerke & Arbeitsplatz-Einrichtung",
    description: "Von der FritzBox bis zur Firewall – wir richten Ihr Büro technisch ein, komplett und zuverlässig.",
    icon: Globe,
    color: "text-red-500",
  },
  {
    id: 3,
    category: "cloud",
    title: "Cloud Solutions",
    description: "Skalierbare, sichere Cloud – abgestimmt auf die Anforderungen Ihres Unternehmens.",
    icon: Cloud,
    color: "text-red-500",
  },
  {
    id: 4,
    category: "cloud",
    title: "Modern Workplace",
    description: "Digitales Arbeiten leicht gemacht – Microsoft 365, Teams & Cloud-Lösungen für Ihr Büro.",
    icon: BriefcaseBusiness,
    color: "text-red-500",
  },
  {
    id: 5,
    category: "it",
    title: "IT as a Service",
    description: "Ihre komplette IT in guten Händen – Betreuung, Wartung & Support in einem Paket.",
    icon: Wrench,
    color: "text-red-500",
  },
  {
    id: 6,
    category: "it",
    title: "IT-Support & Beratung",
    description: "Schnelle Hilfe & verständliche Beratung – persönlich, ehrlich, direkt erreichbar.",
    icon: MessageCircleMore,
    color: "text-red-500",
  },
]

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("cloud")
  const filteredServices = services.filter(
    (service) => service.category === activeCategory
  )

  return (
    <section id="services" className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-8">
            {/* Vertical Text */}
            <div className="hidden lg:block mt-14">
              <div className="writing-mode-vertical text-sm text-gray-400 tracking-widest transform rotate-270">
                Unsere Lösungen
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-red-500 mb-4">
                IT-Partner für lokale Unternehmen
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl">
                Ob IT-Support, Cloud oder moderne Arbeitsplätze – Sköldsolve ist der zuverlässige IT-Partner an Ihrer Seite. Wir helfen Ihnen, die Technik im Griff zu haben, damit Sie sich auf Ihr Geschäft konzentrieren können.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8 ml-34">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <div key={item.id} className="relative">
                  {activeCategory === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-r"></div>
                  )}
                  <button
                    onClick={() => setActiveCategory(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      activeCategory === item.id
                        ? "text-gray-900 font-medium bg-white/50"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                </div>
              ))}
            </nav>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3 -ml-4">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredServices.map((service) => {
            const IconComponent = service.icon
            return (
                <Card
                key={service.id}
                className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                <CardContent className="p-6">
                    {/* Icon */}
                    <div className="mb-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                        <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                    </p>

                    {/* CTA */}
                    <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-700 hover:text-red-500 font-medium"
                    >
                    Know more
                    <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </CardContent>
                </Card>
            )
            })}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-16 border-gray-300" />
    </section>
  )
}
