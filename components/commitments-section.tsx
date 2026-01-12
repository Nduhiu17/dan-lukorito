"use client"

const commitments = [
  {
    title: "Representation",
    description: "I will be the true voice of the people of Webuye East.",
    icon: "🗣️",
  },
  {
    title: "Legislation",
    description: "I will debate, shape, and pass laws for justice, equity, and development.",
    icon: "⚖️",
  },
  {
    title: "Oversight",
    description: "I will scrutinize government actions and approve budgets.",
    icon: "👁️",
  },
  {
    title: "Development & Service Delivery",
    description: "I will oversee NG-CDF projects in Education, Health, and Infrastructure.",
    icon: "🏗️",
  },
  {
    title: "People-Centred Governance",
    description: "I will ensure national policies reflect the people's real needs of Webuye East.",
    icon: "👥",
  },
]

export function CommitmentsSection() {
  return (
    <section id="commitments" className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 text-balance">
            My Commitments as MP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five pillars of leadership dedicated to serving Webuye East
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary rounded-xl p-6 md:p-8 hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{commitment.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{commitment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Together, We Build Webuye East</h3>
          <p className="text-lg text-balance opacity-95">
            Every commitment is a promise. Every promise is an action. Your vote ensures real change.
          </p>
        </div>
      </div>
    </section>
  )
}
