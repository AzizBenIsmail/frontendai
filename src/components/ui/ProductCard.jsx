import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0])

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product, selectedColor)
  }

  const handleCardClick = () => {
    navigate(`/produit/${product.id}`)
  }

  return (
    <div
      className="group cursor-pointer card-hover"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden bg-tan h-64 md:h-72 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {product.madeInFrance && (
          <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 text-xs font-serif">
            FRANCE
          </div>
        )}
      </div>
      <div className="space-y-3">
        <h3 className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="text-charcoal opacity-70 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mb-3">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedColor(color)
              }}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                selectedColor === color
                  ? 'border-gold'
                  : 'border-charcoal/30 hover:border-charcoal'
              }`}
              title={color}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-serif text-lg text-charcoal">
            {product.price.toLocaleString('fr-FR')} €
          </span>
          <button
            onClick={handleAddToCart}
            className="btn-primary text-sm py-2 px-4"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
