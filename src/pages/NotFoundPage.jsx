import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <div className="font-serif text-9xl text-gold mb-4 opacity-20">
          404
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          Page Non Trouvée
        </h1>
        <p className="text-lg text-charcoal/70 mb-8 max-w-md">
          Nous regrettons, mais la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary">
          Retour à l'Accueil
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
