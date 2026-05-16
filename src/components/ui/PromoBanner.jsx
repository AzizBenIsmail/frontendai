import React from 'react'

const PromoBanner = () => {
  return (
    <section className="bg-gradient-to-r from-charcoal to-leather text-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="font-serif text-3xl md:text-4xl mb-4">
          Livraison gratuite
        </h3>
        <p className="text-lg opacity-90">
          Pour toute commande supérieure à 200 €, bénéficiez de la livraison gratuite en France métropolitaine
        </p>
      </div>
    </section>
  )
}

export default PromoBanner
