import React from 'react'
import Image from 'next/image'


const Values = () => {
  return (
    <section id="projekte" className="bg-gray-50 relative mt-12">
      <div className="max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="px-4 sm:px-6 lg:px-8">
              <h1 className="text-7xl lg:text-7xl font-bold text-neutral-800 mb-4">
                Ihr Partner für IT-Lösungen aus Bern.
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-8 md:gap-16 items-start mt-16 px-4 sm:px-6 lg:px-8">
            {/* Linke Spalte: 1/4 */}
            <div className="col-span-1 flex flex-wrap items-start md:justify-start">
                <div className="rotate-350">
                <Image
                    src="/images/Projekte/bento-grid-2.jpg"
                    alt="Person working at desk"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover aspect-square"
                />
                </div>
                <div className="rotate-12">
                <Image
                    src="/images/Projekte/bento-grid-2.jpg"
                    alt="Person working at desk"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover aspect-square"
                />
                </div>
                <div className="rotate-350">
                <Image
                    src="/images/Projekte/bento-grid-2.jpg"
                    alt="Person working at desk"
                    width={100}
                    height={100}
                    className="rounded-lg object-cover aspect-square"
                />
                </div>
            </div>

            {/* Rechte Spalte: 3/4 */}
            <div className="col-span-2">
                <h2 className="text-4xl font-semibold text-neutral-800 mb-4">
                IT für KMU und Schulen – klar, effizient, zuverlässig. Lösungen, die im Alltag funktionieren.
                </h2>

                <h3 className="text-2xl font-semibold text-neutral-800 pt-8">
                    Unsere Mission
                </h3>
                <p className="text-lg text-neutral-600 mt-2">
                    Wir helfen Unternehmen, ihre IT sicher und sinnvoll zu nutzen – mit persönlichem Support, modernen Tools und echtem Engagement.
                </p>

                <h3 className="text-2xl font-semibold text-neutral-800 pt-6">
                    Unsere Geschichte
                </h3>
                <p className="text-lg text-neutral-600 mt-2">
                    Wir helfen Unternehmen, ihre IT sicher und sinnvoll zu nutzen – mit persönlichem Support, modernen Tools und echtem Engagement.
                </p>

                <div className="w-full">
                <Image
                    src="/images/about-us/values-01.jpg"
                    alt="Person working at desk"
                    width={640}
                    height={440}
                    className="rounded-lg object-cover mt-6 h-[35rem]" // z.B. h-48 für geringere Höhe
                />
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Values