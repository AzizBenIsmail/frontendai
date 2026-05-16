import React from 'react'
import ProductCard from '../ui/ProductCard'

const ProductGrid = ({ products, title }) => {
  return (
    <section className="section-padding bg-cream">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
