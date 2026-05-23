import React, { useState } from 'react'
import { addCarWithImage } from '../services/cars.service'
import HeroSection from '../components/sections/HeroSection'

const AddCarPage = () => {
  const [formData, setFormData] = useState({
    marque: '',
    modele: '',
    annee: '',
    couleur: '',
    prix: '',
    kilometrage: '',
    numero_chassis: '',
    carburant: 'essence',
    transmission: 'manuelle',
    puissance: '',
    description: '',
  })

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      // Créer un aperçu
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      setError(null)
      setSuccess(null)

      // Valider les champs requis
      if (!formData.marque || !formData.prix) {
        throw new Error('La marque et le prix sont obligatoires')
      }

      const result = await addCarWithImage(formData, image)
      
      setSuccess('Voiture ajoutée avec succès!')
      console.log('Résultat:', result)
      
      // Réinitialiser le formulaire
      setFormData({
        marque: '',
        modele: '',
        annee: '',
        couleur: '',
        prix: '',
        kilometrage: '',
        numero_chassis: '',
        carburant: 'essence',
        transmission: 'manuelle',
        puissance: '',
        description: '',
      })
      setImage(null)
      setPreview(null)

    } catch (err) {
      console.error('Erreur:', err)
      setError(err.message || 'Erreur lors de l\'ajout de la voiture')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <HeroSection
        title="Ajouter une voiture"
        subtitle="Ajoutez une nouvelle voiture à notre collection"
        image="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=800&fit=crop"
        fullHeight={false}
      />

      <section className="section-padding bg-cream">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            {/* Messages d'erreur et de succès */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}

            {/* Informations générales */}
            <h2 className="text-2xl font-bold mb-6">Informations générales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Marque *
                </label>
                <input
                  type="text"
                  name="marque"
                  value={formData.marque}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="Ex: BMW, Audi, Mercedes..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Modèle
                </label>
                <input
                  type="text"
                  name="modele"
                  value={formData.modele}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="Ex: Série 3, A4, C-Class..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Année
                </label>
                <input
                  type="number"
                  name="annee"
                  value={formData.annee}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="2023"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Couleur
                </label>
                <input
                  type="text"
                  name="couleur"
                  value={formData.couleur}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="Ex: Noir, Blanc, Bleu..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Prix (€) *
                </label>
                <input
                  type="number"
                  name="prix"
                  value={formData.prix}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="0"
                  min="0"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Kilométrage
                </label>
                <input
                  type="number"
                  name="kilometrage"
                  value={formData.kilometrage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Numéro de châssis
                </label>
                <input
                  type="text"
                  name="numero_chassis"
                  value={formData.numero_chassis}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="VF12ABC123456789"
                />
              </div>
            </div>

            {/* Caractéristiques techniques */}
            <h2 className="text-2xl font-bold mb-6 mt-8">Caractéristiques techniques</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Carburant
                </label>
                <select
                  name="carburant"
                  value={formData.carburant}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                >
                  <option value="essence">Essence</option>
                  <option value="diesel">Diesel</option>
                  <option value="electrique">Électrique</option>
                  <option value="hybride">Hybride</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Transmission
                </label>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                >
                  <option value="manuelle">Manuelle</option>
                  <option value="automatique">Automatique</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Puissance (CV)
                </label>
                <input
                  type="number"
                  name="puissance"
                  value={formData.puissance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="150"
                  min="0"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                placeholder="Décrivez l'état et les caractéristiques spéciales de la voiture..."
              />
            </div>

            {/* Image */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">
                Image de la voiture
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
                {preview && (
                  <div className="mt-4">
                    <p className="text-sm text-charcoal/70 mb-2">Aperçu:</p>
                    <img
                      src={preview}
                      alt="Aperçu"
                      className="max-h-64 w-full object-cover rounded"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Bouton de soumission */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-charcoal text-white px-6 py-3 rounded-lg font-semibold hover:bg-charcoal/90 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {loading ? 'Ajout en cours...' : 'Ajouter la voiture'}
              </button>
              <button
                type="reset"
                className="flex-1 border border-charcoal text-charcoal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Réinitialiser
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default AddCarPage
