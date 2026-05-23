/**
 * Service d'API générique pour gérer les appels HTTP
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Récupère le token d'authentification depuis le localStorage
 */
const getAuthToken = () => {
  return localStorage.getItem('token');
};

/**
 * Crée les headers par défaut avec authentification si disponible
 */
const getHeaders = (contentType = 'application/json') => {
  const headers = {
    'Content-Type': contentType,
  };

  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

/**
 * Fonction générique pour les requêtes GET
 */
export const apiGet = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur GET ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Fonction générique pour les requêtes POST
 */
export const apiPost = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur POST ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Fonction générique pour les requêtes PUT
 */
export const apiPut = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur PUT ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Fonction générique pour les requêtes DELETE
 */
export const apiDelete = async (endpoint) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur DELETE ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Fonction générique pour les requêtes avec upload de fichier
 */
export const apiPostWithFile = async (endpoint, formData) => {
  try {
    const token = getAuthToken();
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erreur POST avec fichier ${endpoint}:`, error);
    throw error;
  }
};

export default {
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
  apiPostWithFile,
};
