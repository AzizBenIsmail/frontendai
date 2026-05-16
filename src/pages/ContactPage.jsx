import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="h-80 flex items-center justify-center bg-gradient-to-br from-charcoal to-leather">
        <div className="text-center text-cream">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Nous Contacter</h1>
          <p className="text-lg opacity-90">
            Vos questions sont importantes pour nous
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl mb-8 text-charcoal">
                Informations de Contact
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-serif text-gold mb-2">Adresse</h3>
                  <p className="text-charcoal/80">
                    42 Rue de Rivoli<br />
                    75004 Paris, France
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-serif text-gold mb-2">Téléphone</h3>
                  <a href="tel:+33142614540" className="text-charcoal hover:text-gold transition-colors">
                    +33 (0)1 42 61 45 40
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-serif text-gold mb-2">Email</h3>
                  <a href="mailto:contact@maisonbouix.fr" className="text-charcoal hover:text-gold transition-colors">
                    contact@maisonbouix.fr
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-serif text-gold mb-2">Horaires d'Ouverture</h3>
                  <p className="text-charcoal/80">
                    Lundi - Samedi : 10h00 - 19h00<br />
                    Dimanche : 14h00 - 19h00<br />
                    Fermé les jours fériés
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl mb-8 text-charcoal">
                Envoyez-nous un Message
              </h2>

              {submitted ? (
                <div className="bg-gold/10 border-2 border-gold rounded-lg p-8 text-center animate-fade-in">
                  <h3 className="font-serif text-lg text-gold mb-2">
                    Merci !
                  </h3>
                  <p className="text-charcoal/80">
                    Votre message a été reçu. Nous vous répondrons dans les meilleurs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-serif text-charcoal mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-charcoal mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-charcoal mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-charcoal/20 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Envoyer
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-tan">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://maps.google.com/maps?q=42+Rue+de+Rivoli+Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Maison Bouix Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
