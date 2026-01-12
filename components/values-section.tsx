"use client"

import { Heart, Handshake, Shield } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Leadership with Integrity",
    description: "Honest, principled leadership that puts the people's interests first, always.",
  },
  {
    icon: Heart,
    title: "Service with Purpose",
    description: "Dedicated public service driven by genuine care for the welfare of Webuye East residents.",
  },
  {
    icon: Handshake,
    title: "Accountability to the People",
    description: "Transparent governance where I answer to you and deliver on every promise.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-16 md:py-24 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide my leadership and define my commitment to you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all text-center border-t-4 border-primary"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-12 md:mt-16 flex justify-center gap-4">
          <div className="h-1 w-8 bg-primary rounded-full"></div>
          <div className="h-1 w-8 bg-secondary rounded-full"></div>
          <div className="h-1 w-8 bg-accent rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
