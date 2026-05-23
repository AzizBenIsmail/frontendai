import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HomePage from '../pages/HomePage'
import CollectionsPage from '../pages/CollectionsPage'
import CategoryPage from '../pages/CategoryPage'
import ProductPage from '../pages/ProductPage'
import SavoirFairePage from '../pages/SavoirFairePage'
import HeritagePage from '../pages/HeritagePage'
import CartPage from '../pages/CartPage'
import ContactPage from '../pages/ContactPage'
import CarsPage from '../pages/CarsPage'
import AddCarPage from '../pages/AddCarPage'
import AddUserPage from '../pages/AddUserPage'
import NotFoundPage from '../pages/NotFoundPage'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:category" element={<CategoryPage />} />
            <Route path="/voitures" element={<CarsPage />} />
            <Route path="/produit/:id" element={<ProductPage />} />
            <Route path="/savoir-faire" element={<SavoirFairePage />} />
            <Route path="/heritage" element={<HeritagePage />} />
            <Route path="/panier" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ajouter-voiture" element={<AddCarPage />} />
            <Route path="/creer-compte" element={<AddUserPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
