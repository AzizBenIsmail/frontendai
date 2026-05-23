import React, { useState } from 'react'
import { addUserClientWithImage } from '../services/users.service'
import HeroSection from '../components/sections/HeroSection'

const AddUserPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    phone: '',
    adresse: '',
    password: '',
    confirmPassword: '',
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
      if (!formData.nom || !formData.email) {
        throw new Error('Le nom et l\'email sont obligatoires')
      }

      // Valider les mots de passe
      if (formData.password !== formData.confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas')
      }

      if (formData.password && formData.password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères')
      }

      // Préparer les données sans confirmPassword
      const { confirmPassword, ...userData } = formData

      const result = await addUserClientWithImage(userData, image)
      
      setSuccess('Utilisateur créé avec succès!')
      console.log('Résultat:', result)
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        adresse: '',
        password: '',
        confirmPassword: '',
      })
      setImage(null)
      setPreview(null)

    } catch (err) {
      console.error('Erreur:', err)
      setError(err.message || 'Erreur lors de la création de l\'utilisateur')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <HeroSection
        title="Créer un compte"
        subtitle="Rejoignez notre communauté de clients privilégiés"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop"
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

            {/* Informations personnelles */}
            <h2 className="text-2xl font-bold mb-6">Informations personnelles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="Jean"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>

            {/* Adresse */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">
                Adresse
              </label>
              <textarea
                name="adresse"
                value={formData.adresse}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                placeholder="Votre adresse complète..."
              />
            </div>

            {/* Sécurité */}
            <h2 className="text-2xl font-bold mb-6 mt-8">Sécurité</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="••••••••"
                  minLength="6"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-charcoal focus:border-transparent"
                  placeholder="••••••••"
                  minLength="6"
                />
              </div>
            </div>

            {/* Photo de profil */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-charcoal mb-2">
                Photo de profil
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
                {loading ? 'Création en cours...' : 'Créer mon compte'}
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

export default AddUserPage
