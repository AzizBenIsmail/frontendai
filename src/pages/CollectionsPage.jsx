import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import CollectionsSection from '../components/sections/CollectionsSection'
import { categories } from '../data/products'

const CollectionsPage = () => {
  return (
    <div>
      <HeroSection
        title="Collections"
        subtitle="Explorez notre sélection de maroquinerie d'exception"
        image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=800&fit=crop"
        fullHeight={false}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto mb-12">
          <p className="text-center text-lg text-charcoal/80 max-w-3xl mx-auto mb-12">
            Depuis plus d'un siècle, Maison Bouix sélectionne avec soin les matières premières et les techniques les plus raffinées pour créer des pièces de maroquinerie intemporelles.
          </p>
        </div>

        <CollectionsSection collections={categories} />
      </section>

      {/* Editorial Section */}
      <section className="section-padding bg-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">L'Art du Détail</h2>
          <p className="text-lg text-charcoal leading-relaxed mb-8">
            Chaque collection incarne une philosophie distincte, tout en partageant les mêmes valeurs de qualité absolue et d'esthétique intemporelle. Du sac structure aux accessoires discrets, découvrez comment nous transformons le cuir en poésie.
          </p>
          <p className="text-charcoal/70">
            "La maroquinerie n'est pas qu'un métier, c'est une passion et une responsabilité envers nos clients qui nous font confiance depuis générations."
          </p>
        </div>
      </section>
    </div>
  )
}

export default CollectionsPage
