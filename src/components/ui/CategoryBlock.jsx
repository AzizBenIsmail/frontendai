import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryBlock = ({ category }) => {
  const navigate = useNavigate()

  const categoryImages = {
    sacs: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    portefeuilles: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    ceintures: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    accessoires: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
  }

  return (
    <div
      className="cursor-pointer group"
      onClick={() => navigate(`/collections/${category.id}`)}
    >
      <div className="relative overflow-hidden bg-tan h-72 mb-4">
        <img
          src={categoryImages[category.id]}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
      </div>
      <h3 className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors text-center mb-2">
        {category.name}
      </h3>
      <p className="text-center text-sm text-charcoal/70">
        {category.description}
      </p>
    </div>
  )
}

export default CategoryBlock
