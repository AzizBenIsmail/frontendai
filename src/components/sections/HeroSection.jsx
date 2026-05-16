import React from 'react'

const HeroSection = ({ title, subtitle, image, fullHeight = true }) => {
  return (
    <section
      className={`relative ${fullHeight ? 'h-screen' : 'h-96'} flex items-center justify-center overflow-hidden`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      <div className="relative z-10 text-center text-cream px-4">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif text-xl md:text-2xl opacity-90 animate-fade-in max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}

export default HeroSection
