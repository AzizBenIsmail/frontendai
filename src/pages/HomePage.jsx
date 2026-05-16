import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import ProductGrid from '../components/sections/ProductGrid'
import CollectionsSection from '../components/sections/CollectionsSection'
import PromoBanner from '../components/ui/PromoBanner'
import TestimonialsCarousel from '../components/ui/TestimonialsCarousel'
import { products, categories } from '../data/products'

const HomePage = () => {
  const featuredProducts = products.slice(0, 8)

  return (
    <div>
      {/* Hero */}
      <HeroSection
        title="Maison Bouix"
        subtitle="Maroquinerie de luxe depuis 1883 • Savoir-faire artisanal • Excellence intemporelle"
        image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=800&fit=crop"
      />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Featured Products */}
      <ProductGrid
        products={featuredProducts}
        title="Nos Créations"
      />

      {/* Collections */}
      <CollectionsSection collections={categories} />

      {/* Savoir-faire Preview */}
      <section className="section-padding bg-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">
              Savoir-faire <br /> à l'Française
            </h2>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              Depuis 1883, Maison Bouix perpétue l'art véritable de la maroquinerie française. Chaque pièce est le fruit d'un savoir-faire transmis de génération en génération.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-gold font-serif text-2xl">★</span>
                <div>
                  <h4 className="font-serif text-charcoal mb-1">Cuirs Premium</h4>
                  <p className="text-sm text-charcoal/70">Sélection des meilleures peaux de pleine fleur</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-serif text-2xl">★</span>
                <div>
                  <h4 className="font-serif text-charcoal mb-1">Artisanat</h4>
                  <p className="text-sm text-charcoal/70">Confection entièrement manuelle en France</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-gold font-serif text-2xl">★</span>
                <div>
                  <h4 className="font-serif text-charcoal mb-1">Durabilité</h4>
                  <p className="text-sm text-charcoal/70">Pièces conçues pour l'éternité</p>
                </div>
              </li>
            </ul>
            <a href="/savoir-faire" className="btn-primary">
              Découvrir notre histoire
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1533907541296-4c07a2ff4d01?w=600&h=600&fit=crop"
              alt="Atelier"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />
    </div>
  )
}

export default HomePage
