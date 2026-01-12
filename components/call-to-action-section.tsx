"use client"

export function CallToActionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Your Vote, Your Voice, Your Future
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-95">
            Webuye East deserves leadership that listens, leaders that deliver, and representatives who truly care.
            Together, we can build a constituency where every person has opportunity and every voice matters.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-2xl font-bold">2027</p>
              <p className="text-sm opacity-90">General Elections</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-2xl font-bold">For Change</p>
              <p className="text-sm opacity-90">Vote Dan Lukorito</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-accent transition-all shadow-lg transform hover:scale-105">
              Support My Campaign
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all">
              Share This Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
