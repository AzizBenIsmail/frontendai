import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-cream shadow-2xl transition-transform duration-300 z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b-2 border-gold/20 pb-4">
            <h2 className="font-serif text-2xl text-charcoal">Panier</h2>
            <button
              onClick={onClose}
              className="text-charcoal hover:text-gold transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="space-y-4 mb-6">
            {items.length === 0 ? (
              <p className="text-center text-charcoal/60 py-8">Votre panier est vide</p>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.color}`} className="flex gap-4 border-b border-gold/10 pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-sm text-charcoal">{item.name}</h4>
                    <p className="text-xs text-charcoal/60 mb-2">{item.color}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-charcoal hover:text-gold"
                      >
                        −
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-charcoal hover:text-gold"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-serif">
                        {(item.price * item.quantity).toLocaleString('fr-FR')} €
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-charcoal/50 hover:text-gold transition-colors"
                      >
                        Retirer
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Total */}
          {items.length > 0 && (
            <>
              <div className="border-t-2 border-gold/20 pt-4 mb-4">
                <div className="flex justify-between items-center font-serif text-lg">
                  <span>Total</span>
                  <span>{getCartTotal().toLocaleString('fr-FR')} €</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/panier"
                onClick={onClose}
                className="btn-primary w-full text-center block mb-3"
              >
                Voir le panier
              </Link>
              <button className="btn-secondary w-full">
                Commander
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer
