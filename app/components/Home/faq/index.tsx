"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MarqueeDemo } from "@/components/img-carousel"

const faqData = [
	{
		id: "item-1",
		question: "Warum sollte mein Unternehmen in die Cloud wechseln?",
		answer:
			"Der Wechsel in die Cloud bietet Ihrem Unternehmen zahlreiche Vorteile: Kosteneinsparungen durch reduzierte Hardware-Investitionen, erhöhte Flexibilität und Skalierbarkeit, verbesserte Zusammenarbeit durch ortsunabhängigen Zugriff, automatische Updates und Backups sowie erhöhte Sicherheit durch professionelle Rechenzentren. Zudem ermöglicht die Cloud eine schnellere Markteinführung neuer Services und Produkte.",
	},
	{
		id: "item-2",
		question: "Wie sicher sind Cloud-Lösungen von NEXSOLVE?",
		answer:
			"Unsere Cloud-Lösungen erfüllen höchste Sicherheitsstandards. Wir verwenden Ende-zu-Ende-Verschlüsselung, Multi-Faktor-Authentifizierung und regelmäßige Sicherheitsaudits. Unsere Rechenzentren sind ISO 27001 zertifiziert und entsprechen den DSGVO-Anforderungen. Zusätzlich bieten wir 24/7 Monitoring, automatische Backups und Disaster Recovery Services.",
	},
	{
		id: "item-3",
		question: "Welche Cloud-Services bietet NEXSOLVE an?",
		answer:
			"Wir bieten ein umfassendes Portfolio an Cloud-Services: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), Cloud Migration Services, Hybrid Cloud Lösungen, Cloud Security Services, Backup und Disaster Recovery sowie 24/7 Support und Monitoring. Alle Services sind individuell auf Ihre Bedürfnisse anpassbar.",
	},
	{
		id: "item-4",
		question: "Wie läuft eine Cloud-Migration mit NEXSOLVE ab?",
		answer:
			"Unsere Cloud-Migration erfolgt in strukturierten Phasen: Zunächst führen wir eine umfassende Analyse Ihrer bestehenden IT-Infrastruktur durch. Dann entwickeln wir eine maßgeschneiderte Migrationsstrategie, führen Tests in einer sicheren Umgebung durch und migrieren Ihre Systeme schrittweise mit minimalen Ausfallzeiten. Nach der Migration bieten wir kontinuierlichen Support und Optimierung.",
	},
]

export default function FAQSection() {
	const [openItems, setOpenItems] = useState<string[]>([])

	const toggleItem = (itemId: string) => {
		setOpenItems((prev) =>
			prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
		)
	}

	return (
		<section id="faq">
			<div className="w-full max-w-6xl mx-auto p-6">
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Linke Seite: FAQ */}
					<div className="flex-1">
						<div className="space-y-0">
							{faqData.map((faq) => (
								<div key={faq.id} className="border-b border-b-bluegrey last:border-b-0">
									<Accordion type="single" collapsible>
										<AccordionItem value={faq.id} className="border-0">
											<AccordionTrigger
												className="hover:no-underline py-8 text-left group"
												onClick={() => toggleItem(faq.id)}
											>
												<div className="flex items-center justify-between w-full">
													<h2 className="text-2xl md:text-2xl font-thin text-black pr-8 leading-tight">
														{faq.question}
													</h2>
												</div>
											</AccordionTrigger>
											<AccordionContent className="pb-8">
												<div className="pr-16">
													<p className="text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
												</div>
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								</div>
							))}
						</div>
					</div>
					{/* Rechte Seite: Text + Titel */}
					<div className="w-full lg:w-5/12 flex flex-col items-start justify-start">
						<div className="text-sm text-gray-400 tracking-widest mb-6">
							Unsere Projekte sprechen für sich
						</div>
						<h1 className="text-4xl lg:text-4xl font-bold text-red-500 mb-4">
							Ihr habt Fragen? <br></br>Wir haben Antworten!
						</h1>
					</div>
				</div>
			</div>
			<MarqueeDemo />
			<div className='h-0.5 w-full bg-black/5 mt-5'></div>
		</section>
	)
}
