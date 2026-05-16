import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg text-gold mb-4">Maison Bouix</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Depuis 1883, l'excellence du savoir-faire français en maroquinerie de luxe. Chaque pièce incarne notre engagement envers la qualité et l'intemporalité.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-gold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collections/sacs" className="hover:text-gold transition-colors">Sacs</Link></li>
              <li><Link to="/collections/portefeuilles" className="hover:text-gold transition-colors">Portefeuilles</Link></li>
              <li><Link to="/collections/ceintures" className="hover:text-gold transition-colors">Ceintures</Link></li>
              <li><Link to="/collections/accessoires" className="hover:text-gold transition-colors">Accessoires</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-serif text-gold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/savoir-faire" className="hover:text-gold transition-colors">Savoir-faire</Link></li>
              <li><Link to="/heritage" className="hover:text-gold transition-colors">Héritage</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Nous contacter</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-gold mb-4">Nous contacter</h4>
            <div className="text-sm space-y-3 opacity-80">
              <p>42 Rue de Rivoli<br />75004 Paris, France</p>
              <p>+33 (0)1 42 61 45 40</p>
              <p>contact@maisonbouix.fr</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>&copy; 2024 Maison Bouix. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-gold transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-gold transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
