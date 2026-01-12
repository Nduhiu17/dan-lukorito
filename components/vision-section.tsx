"use client"

export function VisionSection() {
  const visionPoints = [
    {
      title: "Quality Education",
      description:
        "Improved school infrastructure, learning materials, and teacher development for every child in Webuye East.",
    },
    {
      title: "Healthcare Excellence",
      description:
        "Accessible and affordable healthcare facilities ensuring every family has quality medical services.",
    },
    {
      title: "Economic Growth",
      description:
        "Creating job opportunities and supporting local businesses to reduce unemployment and boost our economy.",
    },
    {
      title: "Infrastructure Development",
      description: "Building and upgrading roads, water systems, and utilities connecting all parts of Webuye East.",
    },
    {
      title: "Transparent Governance",
      description: "Open and accountable government where your voice matters and resources are used wisely.",
    },
  ]

  return (
    <section id="vision" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            Vision for Webuye East
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A prosperous constituency where every resident has opportunity, dignity, and hope
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-12 text-white text-center font-bold text-6xl md:text-7xl">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">{point.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
