import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-gold/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div className="text-2xl font-serif text-charcoal hover:text-gold transition-colors">
              MAISON<br />BOUIX
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Collections
            </NavLink>
            <NavLink
              to="/savoir-faire"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Savoir-faire
            </NavLink>
            <NavLink
              to="/heritage"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Héritage
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Cart Icon */}
          <Link
            to="/panier"
            className="relative flex items-center nav-link"
            onClick={closeMenu}
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-charcoal text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden ml-4 nav-link"
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down border-t-2 border-gold/20">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={closeMenu}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `block py-2 px-4 nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={closeMenu}
            >
              Collections
            </NavLink>
            <NavLink
              to="/savoir-faire"
              className={({ isActive }) =>
                `block py-2 px-4 nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={closeMenu}
            >
              Savoir-faire
            </NavLink>
            <NavLink
              to="/heritage"
              className={({ isActive }) =>
                `block py-2 px-4 nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={closeMenu}
            >
              Héritage
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 nav-link ${isActive ? 'nav-link-active' : ''}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
