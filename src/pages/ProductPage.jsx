import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = products.find((p) => p.id === id)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-4xl font-serif mb-4">Produit non trouvé</h1>
        <a href="/collections" className="btn-primary">
          Retour aux collections
        </a>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="section-padding bg-cream border-b-2 border-gold/10">
        <div className="max-w-7xl mx-auto flex gap-2 text-sm text-charcoal/70">
          <a href="/collections" className="hover:text-gold transition-colors">Collections</a>
          <span>/</span>
          <a href={`/collections/${product.category}`} className="hover:text-gold transition-colors">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </a>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Gallery */}
          <div>
            <div className="relative bg-tan h-96 md:h-full rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.madeInFrance && (
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-4 py-2 text-sm font-serif">
                  FABRIQUÉ EN FRANCE
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="font-serif text-4xl mb-2 text-charcoal">
              {product.name}
            </h1>
            <p className="text-charcoal/70 text-sm mb-6">
              Référence : {product.id}
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold">★</span>
              ))}
            </div>

            <p className="text-xl font-serif text-charcoal mb-6">
              {product.price.toLocaleString('fr-FR')} €
            </p>

            {/* Description */}
            <p className="text-charcoal/80 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details */}
            <div className="bg-beige p-6 rounded-lg mb-8">
              <h3 className="font-serif text-charcoal mb-3">Caractéristiques</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-serif text-charcoal mb-4">Couleur</h3>
              <div className="flex gap-4 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 border-2 transition-all ${
                      selectedColor === color
                        ? 'border-gold bg-gold/10'
                        : 'border-charcoal/30 hover:border-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-serif text-charcoal mb-4">Quantité</h3>
              <div className="flex items-center gap-4 w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all"
                >
                  −
                </button>
                <span className="text-center flex-1">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-charcoal flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleAddToCart}
              className={`btn-primary w-full mb-4 transition-all ${
                addedToCart ? 'bg-gold text-charcoal' : ''
              }`}
            >
              {addedToCart ? '✓ Ajouté au panier' : 'Ajouter au panier'}
            </button>

            {/* Info Box */}
            <div className="space-y-3 text-sm text-charcoal/70 border-t-2 border-gold/10 pt-6">
              <div className="flex gap-3">
                <span className="text-gold">★</span>
                <span>Livraison gratuite à partir de 200 €</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">★</span>
                <span>Retours gratuits sous 30 jours</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gold">★</span>
                <span>Garantie à vie sur les défauts de fabrication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-beige">
          <h2 className="section-title">Produits Connexes</h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/produit/${p.id}`)}
                  className="cursor-pointer group card-hover"
                >
                  <div className="relative overflow-hidden bg-tan h-64 mb-4 rounded-lg">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-serif text-charcoal group-hover:text-gold transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-charcoal/70 text-sm mb-3">
                    {p.price.toLocaleString('fr-FR')} €
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductPage
