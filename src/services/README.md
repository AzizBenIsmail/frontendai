# Services API

Ce dossier contient tous les services pour gérer les appels API vers le backend.

## Structure

### `api.service.js`
Service générique pour tous les appels HTTP (GET, POST, PUT, DELETE).

**Fonctions disponibles:**
- `apiGet(endpoint)` - Requête GET
- `apiPost(endpoint, data)` - Requête POST
- `apiPut(endpoint, data)` - Requête PUT
- `apiDelete(endpoint)` - Requête DELETE
- `apiPostWithFile(endpoint, formData)` - Requête POST avec fichier

### `cars.service.js`
Service spécifique pour gérer les voitures.

**Fonctions disponibles:**
- `getAllCars()` - Récupère toutes les voitures
- `getAvailableCars()` - Récupère les voitures disponibles
- `getCarById(id)` - Récupère une voiture par ID
- `addCar(carData)` - Ajoute une nouvelle voiture
- `addCarWithImage(carData, imageFile)` - Ajoute une voiture avec image
- `updateCar(id, carData)` - Met à jour une voiture
- `updateCarWithImage(id, carData, imageFile)` - Met à jour une voiture avec image
- `deleteCar(id)` - Supprime une voiture

### `users.service.js`
Service spécifique pour gérer les utilisateurs.

**Fonctions disponibles:**
- `getAllUsers()` - Récupère tous les utilisateurs
- `getUserById(id)` - Récupère un utilisateur par ID
- `addUserClient(userData)` - Ajoute un utilisateur client
- `addUserClientWithImage(userData, imageFile)` - Ajoute un utilisateur avec image
- `addUserAdmin(userData)` - Ajoute un utilisateur admin
- `updateUser(id, userData)` - Met à jour un utilisateur
- `deleteUser(id)` - Supprime un utilisateur
- `login(credentials)` - Connecte un utilisateur
- `logout()` - Déconnecte l'utilisateur

## Utilisation

### Exemple simple (GET)
```javascript
import { getAllCars } from '../services/cars.service'

const MyComponent = () => {
  const [cars, setCars] = useState([])
  
  useEffect(() => {
    getAllCars()
      .then(data => setCars(data.cars))
      .catch(error => console.error(error))
  }, [])
  
  return <div>{/* ... */}</div>
}
```

### Exemple avec erreur (POST)
```javascript
import { addCar } from '../services/cars.service'

const addNewCar = async () => {
  try {
    const result = await addCar({
      nom: 'Tesla',
      marque: 'Tesla Model 3'
    })
    console.log('Voiture ajoutée:', result)
  } catch (error) {
    console.error('Erreur:', error)
  }
}
```

### Exemple avec fichier
```javascript
import { addCarWithImage } from '../services/cars.service'

const addNewCarWithImage = async (fileInput) => {
  try {
    const result = await addCarWithImage(
      { nom: 'Tesla', marque: 'Tesla Model 3' },
      fileInput.files[0]
    )
    console.log('Voiture ajoutée avec image:', result)
  } catch (error) {
    console.error('Erreur:', error)
  }
}
```

## Configuration

L'URL de l'API est configurée via la variable d'environnement `VITE_API_URL`:

```env
VITE_API_URL=http://localhost:3000
```

Le token d'authentification est automatiquement récupéré depuis `localStorage` et inclus dans les headers de toutes les requêtes.

## Gestion de l'authentification

Les services gèrent automatiquement:
- Récupération du token depuis localStorage
- Ajout du token dans l'en-tête `Authorization: Bearer <token>`
- Sauvegarde du token après un login
- Suppression du token après un logout

## Bonnes pratiques

1. **Toujours utiliser les services** plutôt que faire les appels fetch directement
2. **Gérer les erreurs** dans les composants qui utilisent les services
3. **Ajouter de nouveaux services** si vous devez gérer de nouveaux types de données
4. **Utiliser les FormData** pour les uploads de fichiers
