"use client"

import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 flex">
          <div className="w-1/3 bg-[#007A5E]"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-[#CE1126]"></div>
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl -z-10 transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/profile-photo.jpeg"
                  alt="Dan Lukorito"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white drop-shadow-lg">
                Dan Lukorito
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 drop-shadow-md">Webuye East 2027</p>
              <div className="h-1 w-24 bg-yellow-300 rounded-full drop-shadow"></div>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white leading-relaxed text-balance drop-shadow-md font-semibold">
                Leadership with Integrity. Service with Purpose. Accountability to the People.
              </p>
              <p className="text-base md:text-lg text-gray-100 leading-relaxed drop-shadow-md">
                I am committed to being the true voice of Webuye East, bringing transformational leadership and real
                change to our constituency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all shadow-lg transform hover:scale-105">
                Support My Campaign
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all drop-shadow-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
