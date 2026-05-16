import React, { useState } from 'react'

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marie D.',
      text: 'Un sac d\'exception. La qualité du cuir, la finition, tout est parfait. C\'est un investissement qui en vaut la peine.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jean-Pierre L.',
      text: 'Après 40 ans, Maison Bouix reste l\'excellence. Mon portefeuille m\'accompagne depuis 15 ans sans aucun problème.',
      rating: 5
    },
    {
      id: 3,
      name: 'Sophie M.',
      text: 'Un service client impeccable et des produits qui durent. Je recommande vivement.',
      rating: 5
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-beige">
      <h2 className="section-title">Avis Clients</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-cream rounded-lg p-8 md:p-12 shadow-md">
          {/* Testimonial */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-gold text-lg">★</span>
              ))}
            </div>
            <p className="text-lg text-charcoal italic mb-6 luxury-text">
              "{testimonials[current].text}"
            </p>
            <p className="font-serif text-charcoal">
              — {testimonials[current].name}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-colors"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? 'bg-gold w-8' : 'bg-charcoal/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
