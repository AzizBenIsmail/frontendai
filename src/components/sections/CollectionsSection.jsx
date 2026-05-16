import React from 'react'
import CategoryBlock from '../ui/CategoryBlock'

const CollectionsSection = ({ collections }) => {
  return (
    <section className="section-padding bg-cream">
      <h2 className="section-title">Collections</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((category) => (
            <CategoryBlock key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsSection
