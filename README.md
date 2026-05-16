# Maison Bouix - Maroquinerie depuis 1883

Application web e-commerce de luxe React.js responsive pour la maroquinerie française haut de gamme **Maison Bouix**.

## 🎯 Caractéristiques

✨ **Design Luxe Discret**
- Palette élégante : crème, beige, brun cuir, noir charbon, or
- Typographie : Playfair Display (titres), Lato (corps)
- Animations fluides et subtiles
- Mise en page éditoriale avec espaces généreux

📱 **Responsive Mobile-First**
- Navbar avec menu burger
- Grille adaptative
- Navigation fluide sur tous les appareils

🛒 **Gestion du Panier**
- Context API centralisée
- Persistance locale
- Calcul des totaux et livraison

🎨 **Technologies**
- React 18 avec Hooks
- React Router DOM v6 (navigation SPA)
- Tailwind CSS (styling)
- Vite (build tool)
- Données mockées (aucun backend)

## 📂 Structure du Projet

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── CollectionsSection.jsx
│   │   └── SavoirFaireSection.jsx
│   └── ui/
│       ├── ProductCard.jsx
│       ├── CartDrawer.jsx
│       ├── CategoryBlock.jsx
│       ├── PromoBanner.jsx
│       └── TestimonialsCarousel.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── CollectionsPage.jsx
│   ├── CategoryPage.jsx
│   ├── ProductPage.jsx
│   ├── SavoirFairePage.jsx
│   ├── HeritagePage.jsx
│   ├── CartPage.jsx
│   ├── ContactPage.jsx
│   └── NotFoundPage.jsx
├── router/
│   └── AppRouter.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Démarrage

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

L'application s'ouvrira à `http://localhost:5173`

### Production

```bash
npm run build
npm run preview
```

## 🗺️ Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | Accueil avec collections, produits vedettes, avis |
| `/collections` | CollectionsPage | Vue d'ensemble des catégories |
| `/collections/:category` | CategoryPage | Produits filtrés par catégorie |
| `/produit/:id` | ProductPage | Détail produit complète |
| `/savoir-faire` | SavoirFairePage | Processus artisanal, valeurs |
| `/heritage` | HeritagePage | Timeline 1883-2024, histoire |
| `/panier` | CartPage | Récapitulatif panier |
| `/contact` | ContactPage | Formulaire de contact, infos |
| `*` | NotFoundPage | Page 404 élégante |

## 📦 Produits Mockés

**12+ produits** répartis en 4 catégories :
- **Sacs** : 4 modèles (Classique, Tote, Pochette, Bowling)
- **Portefeuilles** : 4 modèles (Continental, Bifold, Slim, Zipé)
- **Ceintures** : 4 modèles (Classique, Braided, Dorée, Réversible)
- **Accessoires** : 3 modèles (Porte-clés, Porte-cartes, Bracelet)

Chaque produit inclut :
- Images haute résolution (Unsplash)
- Description détaillée
- Coloris multiples
- Badge "Fabriqué en France"
- Détails techniques complets

## 🎨 Palette de Couleurs Tailwind

```css
cream: #F5F1ED
beige: #E8DDD2
tan: #D4C4B0
leather: #8B7355
charcoal: #2C2C2C
gold: #D4AF37
ivory: #FFFFF0
```

## ✨ Animations

- `fade-in` : Apparition progressive
- `slide-up` : Glissement vers le haut
- `slide-down` : Glissement vers le bas
- Transitions smooth sur les boutons, liens
- Hover effects subtils et élégants

## 🛍️ Fonctionnalités

### Panier (CartContext)
- Ajout/suppression de produits
- Mise à jour des quantités
- Sélection de couleurs
- Calcul automatique totaux
- Badge compteur d'articles
- Panier vide gracieux

### Navigation
- NavLink actif avec soulignage doré
- ScrollToTop automatique par route
- Menu responsive mobile
- Breadcrumb sur les pages produit

### UX/Design
- Hover effects raffinés
- Transitions fluides (300-700ms)
- Typo sérifée élégante pour les titres
- Espacements généreux
- Images full-width éditoriales

## 🔧 Technologies Utilisées

- **React 18.2** - Framework UI
- **React Router DOM 6.20** - Routage SPA
- **Tailwind CSS 3.4** - Styling atomic
- **Vite 5.0** - Build tool ultra-rapide
- **PostCSS 8.4** - Processing CSS
- **Autoprefixer 10.4** - Compatibilité navigateurs

## 📱 Support Navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari 12+
- Mobile : iOS Safari, Chrome Android

## 📝 Notes de Développement

- **Pas de backend** : Toutes les données sont mockées en local
- **Responsive mobile-first** : Conçu d'abord pour mobile, puis desktop
- **Aucune dépendance externe pour les icônes** : Utilisation d'SVG inline
- **Performance** : Lazy loading images, optimisation Vite
- **Accessibilité** : Sémantique HTML, contraste des couleurs

## 🎯 Prochaines Améliorations Possibles

- [ ] Intégration backend réelle
- [ ] Authentification utilisateur
- [ ] Système de favoris
- [ ] Filtres avancés (prix, matière, etc.)
- [ ] Recherche produits
- [ ] Paiement Stripe/PayPal
- [ ] Admin dashboard
- [ ] CMS headless
- [ ] Internationalisation (i18n)
- [ ] PWA (offline support)

## 📄 Licence

Projet pédagogique. Tous droits réservés Maison Bouix.

---

**Créé avec passion pour l'excellence du savoir-faire français.**
