import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import { getAllCars } from '../services/cars.service'

const CarsPage = () => {
  const [cars, setCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Filtres
  const [filters, setFilters] = useState({
    marque: '',
    carburant: '',
    minPrice: '',
    maxPrice: '',
    disponible: true,
  })

  // Récupérer les voitures au chargement
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true)
        const data = await getAllCars()
        const carsData = data.cars && Array.isArray(data.cars) ? data.cars : []
        setCars(carsData)
        setFilteredCars(carsData)
        setError(null)
      } catch (err) {
        console.error('Erreur lors de la récupération des voitures:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  // Appliquer les filtres
  useEffect(() => {
    let result = cars

    // Filtre par marque
    if (filters.marque) {
      result = result.filter(car => 
        car.marque?.toLowerCase().includes(filters.marque.toLowerCase())
      )
    }

    // Filtre par carburant
    if (filters.carburant) {
      result = result.filter(car => car.carburant === filters.carburant)
    }

    // Filtre par prix min
    if (filters.minPrice) {
      result = result.filter(car => car.prix >= parseFloat(filters.minPrice))
    }

    // Filtre par prix max
    if (filters.maxPrice) {
      result = result.filter(car => car.prix <= parseFloat(filters.maxPrice))
    }

    // Filtre par disponibilité
    if (filters.disponible) {
      result = result.filter(car => car.disponible !== false)
    }

    setFilteredCars(result)
  }, [filters, cars])

  const handleFilterChange = useCallback((e) => {
    const { name, value, type, checked } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters({
      marque: '',
      carburant: '',
      minPrice: '',
      maxPrice: '',
      disponible: true,
    })
  }, [])

  if (loading) {
    return (
      <div>
        <HeroSection
          title="Nos Voitures"
          subtitle="Découvrez notre sélection exclusive de véhicules"
          image="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=800&fit=crop"
          fullHeight={false}
        />
        <section className="section-padding bg-cream">
          <div className="text-center py-12">
            <p className="text-lg text-charcoal">Chargement des voitures...</p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <HeroSection
        title="Nos Voitures"
        subtitle="Découvrez notre sélection exclusive de véhicules"
        image="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=800&fit=crop"
        fullHeight={false}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              Erreur: {error}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Barre latérale de filtres */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
                <h3 className="text-xl font-bold text-charcoal mb-6">Filtres</h3>

                {/* Filtre Marque */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Marque
                  </label>
                  <input
                    type="text"
                    name="marque"
                    value={filters.marque}
                    onChange={handleFilterChange}
                    placeholder="Rechercher..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  />
                </div>

                {/* Filtre Carburant */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Carburant
                  </label>
                  <select
                    name="carburant"
                    value={filters.carburant}
                    onChange={handleFilterChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  >
                    <option value="">Tous</option>
                    <option value="essence">Essence</option>
                    <option value="diesel">Diesel</option>
                    <option value="electrique">Électrique</option>
                    <option value="hybride">Hybride</option>
                  </select>
                </div>

                {/* Filtre Prix */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-charcoal mb-2">
                    Prix (€)
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="number"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                      placeholder="Min"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-charcoal focus:border-transparent"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                      placeholder="Max"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-charcoal focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Filtre Disponibilité */}
                <div className="mb-6">
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="disponible"
                      checked={filters.disponible}
                      onChange={handleFilterChange}
                      className="w-4 h-4 mr-2 rounded"
                    />
                    <span className="font-semibold text-charcoal">Disponible uniquement</span>
                  </label>
                </div>

                {/* Bouton Réinitialiser */}
                <button
                  onClick={resetFilters}
                  className="w-full px-4 py-2 border border-charcoal text-charcoal rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Réinitialiser
                </button>
              </div>
            </div>

            {/* Affichage des voitures */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-charcoal/70">
                  {filteredCars.length} voiture{filteredCars.length > 1 ? 's' : ''} trouvée{filteredCars.length > 1 ? 's' : ''}
                </p>
                <Link
                  to="/ajouter-voiture"
                  className="px-6 py-2 bg-charcoal text-white rounded-lg font-semibold hover:bg-charcoal/90 transition"
                >
                  + Ajouter une voiture
                </Link>
              </div>

              {filteredCars.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-charcoal/70">
                    Aucune voiture ne correspond à vos critères de recherche.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredCars.map(car => (
                    <div key={car._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                      {/* Image */}
                      <div className="relative pb-2/3 bg-gray-200 h-64 overflow-hidden">
                        <img
                          src={`http://localhost:5000/images/${car.image_voiture}`}
                          alt={`${car.marque} ${car.modele}`}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                        {car.disponible === false && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Non disponible
                          </div>
                        )}
                      </div>

                      {/* Contenu */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-charcoal mb-2">
                          {car.marque} {car.modele}
                        </h3>

                        <p className="text-charcoal/70 text-sm mb-3">
                          {car.annee} • {car.couleur}
                        </p>

                        {/* Caractéristiques */}
                        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                          {car.carburant && (
                            <div className="text-charcoal/70">
                              <span className="font-semibold">Carburant:</span> {car.carburant}
                            </div>
                          )}
                          {car.transmission && (
                            <div className="text-charcoal/70">
                              <span className="font-semibold">Transmission:</span> {car.transmission}
                            </div>
                          )}
                          {car.kilometrage !== undefined && (
                            <div className="text-charcoal/70">
                              <span className="font-semibold">Km:</span> {car.kilometrage.toLocaleString()}
                            </div>
                          )}
                          {car.puissance && (
                            <div className="text-charcoal/70">
                              <span className="font-semibold">Puissance:</span> {car.puissance} CV
                            </div>
                          )}
                        </div>

                        {car.description && (
                          <p className="text-charcoal/60 text-sm mb-4 line-clamp-2">
                            {car.description}
                          </p>
                        )}

                        {/* Prix et bouton */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="text-2xl font-bold text-charcoal">
                            {car.prix?.toLocaleString('fr-FR')} €
                          </div>
                          <button
                            disabled={car.disponible === false}
                            className="px-4 py-2 bg-charcoal text-white rounded-lg font-semibold hover:bg-charcoal/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
                          >
                            Détails
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CarsPage
