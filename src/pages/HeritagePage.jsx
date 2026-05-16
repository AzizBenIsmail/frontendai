import React, { useState } from 'react'
import HeroSection from '../components/sections/HeroSection'

const HeritagePage = () => {
  const timeline = [
    {
      year: 1883,
      title: 'Fondation',
      description: 'Création de Maison Bouix par Auguste Bouix, maître maroquinier de renom.'
    },
    {
      year: 1920,
      title: 'L\'Âge d\'Or',
      description: 'La maison devient fournisseur des plus grandes familles parisiennes et de la cour.'
    },
    {
      year: 1960,
      title: 'Innovation Discrète',
      description: 'Introduction de nouvelles techniques tout en préservant l\'essence artisanale.'
    },
    {
      year: 2000,
      title: 'Reconnaissance Internationale',
      description: 'Maison Bouix devient un symbole de l\'excellence française en maroquinerie.'
    },
    {
      year: 2024,
      title: 'Héritage & Continuité',
      description: '140 ans d\'histoire, toujours portée par la même passion et le même engagement.'
    },
  ]

  const [activeYear, setActiveYear] = useState(2024)

  return (
    <div>
      <HeroSection
        title="Héritage"
        subtitle="140 ans d'excellence, de tradition et d'innovation"
        image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=800&fit=crop"
        fullHeight={false}
      />

      {/* Timeline */}
      <section className="section-padding bg-cream">
        <h2 className="section-title">Notre Histoire</h2>
        <div className="max-w-4xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gold/30" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 pr-12">
                      <div
                        className={`text-right ${
                          item.year === activeYear ? 'animate-slide-up' : ''
                        }`}
                      >
                        <h3 className="font-serif text-2xl text-charcoal mb-2">
                          {item.title}
                        </h3>
                        <p className="text-charcoal/70">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="w-8 flex justify-center">
                      <button
                        onClick={() => setActiveYear(item.year)}
                        className={`w-6 h-6 rounded-full border-4 transition-all ${
                          item.year === activeYear
                            ? 'bg-gold border-charcoal'
                            : 'bg-cream border-gold hover:border-charcoal'
                        }`}
                      />
                    </div>

                    <div className="w-1/2 pl-12">
                      <span className="font-serif text-3xl text-gold">
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`p-6 rounded-lg cursor-pointer transition-all ${
                  item.year === activeYear
                    ? 'bg-gold/10 border-2 border-gold'
                    : 'bg-beige border-2 border-transparent'
                }`}
              >
                <div className="font-serif text-2xl text-gold mb-2">
                  {item.year}
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders & Values */}
      <section className="section-padding bg-beige">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title mb-12">Fondateurs & Valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder Card */}
            <div className="bg-cream rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gradient-to-br from-tan to-leather flex items-center justify-center">
                <span className="font-serif text-6xl text-cream opacity-20">A</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  Auguste Bouix
                </h3>
                <p className="text-sm text-charcoal/70">
                  Fondateur en 1883, maître maroquinier dont la passion et le perfectionnisme ont posé les fondations de notre maison.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="bg-cream rounded-lg p-6 shadow-md">
                <h4 className="font-serif text-gold mb-2">Tradition</h4>
                <p className="text-sm text-charcoal/70">
                  Respect des techniques ancestrales transmises de génération en génération.
                </p>
              </div>
              <div className="bg-cream rounded-lg p-6 shadow-md">
                <h4 className="font-serif text-gold mb-2">Excellence</h4>
                <p className="text-sm text-charcoal/70">
                  Engagement absolu envers la qualité supérieure.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-cream rounded-lg p-6 shadow-md">
                <h4 className="font-serif text-gold mb-2">Intemporalité</h4>
                <p className="text-sm text-charcoal/70">
                  Créer des pièces qui ne vieillissent jamais stylistiquement.
                </p>
              </div>
              <div className="bg-cream rounded-lg p-6 shadow-md">
                <h4 className="font-serif text-gold mb-2">Responsabilité</h4>
                <p className="text-sm text-charcoal/70">
                  Engagement envers l'environnement et nos artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-8">Notre Vision</h2>
          <p className="text-lg leading-relaxed mb-8">
            Maison Bouix continue à écrire son histoire en restant fidèle à ses principes fondamentaux. Dans un monde en constante évolution, nous demeurons inébranlables dans notre conviction que la qualité véritable et le savoir-faire authentique ne sont jamais négociables.
          </p>
          <p className="text-gold font-serif text-2xl">
            "Créer l'intemporel, c'est créer l'infini."
          </p>
        </div>
      </section>
    </div>
  )
}

export default HeritagePage
