import React from 'react'
import HeroSection from '../components/sections/HeroSection'

const SavoirFairePage = () => {
  const steps = [
    {
      number: 1,
      title: 'Sélection des Cuirs',
      description: 'Nos artisans sélectionnent les plus beaux cuirs pleine fleur auprès de nos fournisseurs partenaires de confiance.'
    },
    {
      number: 2,
      title: 'Préparation',
      description: 'Le cuir est nettoyé, assouplissant et préparé selon les techniques traditionnelles.'
    },
    {
      number: 3,
      title: 'Découpe',
      description: 'Chaque pièce est découpée à la main avec précision, maximisant la qualité de la matière.'
    },
    {
      number: 4,
      title: 'Assemblage',
      description: 'L\'assemblage se fait entièrement manuellement, couture à la main, rivets en laiton.'
    },
    {
      number: 5,
      title: 'Finition',
      description: 'Chaque pièce subit des traitements et finitions artisanales pour un rendu d\'exception.'
    },
    {
      number: 6,
      title: 'Contrôle Qualité',
      description: 'Inspection minutieuse pour garantir l\'excellence de chaque produit fini.'
    },
  ]

  return (
    <div>
      <HeroSection
        title="Savoir-faire"
        subtitle="L'art de la maroquinerie française transmis depuis 1883"
        image="https://images.unsplash.com/photo-1533907541296-4c07a2ff4d01?w=1200&h=800&fit=crop"
        fullHeight={false}
      />

      {/* Introduction */}
      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title">L'Excellence Artisanale</h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            Maison Bouix perpétue depuis 140 ans un savoir-faire d'exception en maroquinerie. Chaque pièce est le fruit d'un travail minutieux et passionné, où tradition et qualité riment avec élégance intemporelle.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-beige">
        <h2 className="section-title">Processus de Création</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-cream rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-charcoal flex items-center justify-center font-serif text-2xl mb-4">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-6 text-charcoal">
              Notre Atelier
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
              Installé au cœur de Paris depuis sa fondation, l'atelier de Maison Bouix est un véritable sanctuaire de l'artisanat. Nos maîtres maroquiniers, formés sur plusieurs années, travaillent quotidiennement à créer des pièces d'exception.
            </p>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Nous refusons volontairement toute production de masse. Chaque création est pensée pour durer, pour s'améliorer avec le temps, et pour accompagner le propriétaire toute une vie.
            </p>
            <div className="space-y-3 text-charcoal/70 text-sm">
              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span>Équipe de 15 artisans maîtres maroquiniers</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span>Production limitée : 50 pièces par mois maximum</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">✓</span>
                <span>100% fabrication manuelle en France</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1533907541296-4c07a2ff4d01?w=600&h=600&fit=crop"
              alt="Atelier"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl text-gold mb-4">Qualité</h3>
              <p className="text-cream/80">
                Seuls les meilleurs matériaux et techniques traditionnelles sont acceptés.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-gold mb-4">Authenticité</h3>
              <p className="text-cream/80">
                Pas de raccourcis, pas de compromis. Chaque pièce est un véritable chef-d'œuvre.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-gold mb-4">Durabilité</h3>
              <p className="text-cream/80">
                Créées pour traverser les décennies, nos pièces deviennent des héritages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SavoirFairePage
