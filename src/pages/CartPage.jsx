import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  if (items.length === 0) {
    return (
      <div>
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h1 className="font-serif text-4xl mb-4 text-charcoal">Panier vide</h1>
            <p className="text-charcoal/70 mb-8">
              Découvrez notre collection exceptionnelle de maroquinerie.
            </p>
            <Link to="/collections" className="btn-primary">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const total = getCartTotal()
  const shipping = total > 200 ? 0 : 15
  const grandTotal = total + shipping

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl mb-8 text-charcoal">Mon Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.color}`}
                  className="flex gap-6 pb-6 border-b-2 border-gold/10"
                >
                  {/* Image */}
                  <div className="w-24 h-24 bg-tan rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-charcoal mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-charcoal/60 mb-3">
                      Couleur : <strong>{item.color}</strong>
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border border-charcoal/30 flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all"
                      >
                        −
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border border-charcoal/30 flex items-center justify-center hover:bg-charcoal hover:text-cream transition-all"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-charcoal/50 hover:text-gold transition-colors"
                    >
                      Retirer du panier
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right flex-shrink-0">
                    <p className="font-serif text-lg text-charcoal">
                      {(item.price * item.quantity).toLocaleString('fr-FR')} €
                    </p>
                    <p className="text-sm text-charcoal/60">
                      {item.price.toLocaleString('fr-FR')} € x {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link
              to="/collections"
              className="mt-8 inline-flex items-center text-charcoal hover:text-gold transition-colors"
            >
              <span className="mr-2">←</span> Continuer les achats
            </Link>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-beige rounded-lg p-8 sticky top-24">
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Résumé
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b-2 border-gold/10">
                <div className="flex justify-between text-charcoal/70">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString('fr-FR')} €</span>
                </div>
                <div className="flex justify-between text-charcoal/70">
                  <span>Livraison</span>
                  <span className={shipping === 0 ? 'text-gold' : ''}>
                    {shipping === 0 ? 'GRATUITE' : shipping.toLocaleString('fr-FR') + ' €'}
                  </span>
                </div>
              </div>

              <div className="flex justify-between font-serif text-xl text-charcoal mb-6">
                <span>Total</span>
                <span>{grandTotal.toLocaleString('fr-FR')} €</span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-charcoal/60 mb-4 text-center">
                  Livraison gratuite à partir de 200 €
                </p>
              )}

              <button className="btn-primary w-full mb-3">
                Commander
              </button>

              <button
                onClick={clearCart}
                className="text-sm text-charcoal/50 hover:text-charcoal transition-colors w-full text-center"
              >
                Vider le panier
              </button>

              {/* Trust Badges */}
              <div className="mt-8 space-y-3 text-xs text-charcoal/60">
                <div className="flex gap-2">
                  <span className="text-gold">✓</span>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gold">✓</span>
                  <span>Retours gratuits 30j</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gold">✓</span>
                  <span>Emballage cadeau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
