import React from 'react'
import { useParams } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import ProductGrid from '../components/sections/ProductGrid'
import { products, categories } from '../data/products'

const CategoryPage = () => {
  const { category } = useParams()
  const categoryData = categories.find((c) => c.id === category)
  const filteredProducts = products.filter((p) => p.category === category)

  if (!categoryData) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-4xl font-serif mb-4">Catégorie non trouvée</h1>
        <a href="/collections" className="btn-primary">
          Retour aux collections
        </a>
      </div>
    )
  }

  return (
    <div>
      <HeroSection
        title={categoryData.name}
        subtitle={categoryData.description}
        image="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=800&fit=crop"
        fullHeight={false}
      />

      {/* Filters Section */}
      <section className="section-padding bg-cream border-b-2 border-gold/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-charcoal/70">
              Affichage <strong>{filteredProducts.length}</strong> produits
            </p>
          </div>
          <div className="flex gap-4">
            <button className="text-charcoal hover:text-gold transition-colors">
              Trier par : Pertinence ▼
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <ProductGrid products={filteredProducts} />

      {/* Additional Info */}
      <section className="section-padding bg-beige">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">À propos de {categoryData.name}</h2>
          <p className="text-lg text-charcoal leading-relaxed">
            Chaque produit de notre collection {categoryData.name.toLowerCase()} est confectionné avec le même engagement envers l'excellence. Nous utilisons uniquement les meilleurs matériaux et les techniques artisanales transmises depuis 1883.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CategoryPage
