/**
 * Service spécifique pour gérer les utilisateurs (users)
 */

import { apiGet, apiPost, apiPut, apiDelete, apiPostWithFile } from './api.service';

/**
 * Récupère tous les utilisateurs (Admin uniquement)
 */
export const getAllUsers = async () => {
  return apiGet('/users/getAllUsers');
};

/**
 * Récupère un utilisateur par ID
 */
export const getUserById = async (id) => {
  return apiGet(`/users/getUserById/${id}`);
};

/**
 * Ajoute un utilisateur client sans image
 */
export const addUserClient = async (userData) => {
  return apiPost('/users/addUserClient', userData);
};

/**
 * Ajoute un utilisateur client avec image
 */
export const addUserClientWithImage = async (userData, imageFile) => {
  const formData = new FormData();
  
  // Ajouter tous les champs de userData
  Object.keys(userData).forEach(key => {
    formData.append(key, userData[key]);
  });
  
  // Ajouter l'image
  if (imageFile) {
    formData.append('image_user', imageFile);
  }
  
  return apiPostWithFile('/users/addUserClientWithImg', formData);
};

/**
 * Ajoute un utilisateur admin
 */
export const addUserAdmin = async (userData) => {
  return apiPost('/users/addUserAdmin', userData);
};

/**
 * Met à jour un utilisateur
 */
export const updateUser = async (id, userData) => {
  return apiPut(`/users/updateUser/${id}`, userData);
};

/**
 * Supprime un utilisateur
 */
export const deleteUser = async (id) => {
  return apiDelete(`/users/deleteUser/${id}`);
};

/**
 * Connecte un utilisateur
 */
export const login = async (credentials) => {
  const response = await apiPost('/users/login', credentials);
  
  // Sauvegarder le token si présent dans la réponse
  if (response.token) {
    localStorage.setItem('token', response.token);
  }
  
  return response;
};

/**
 * Déconnecte l'utilisateur
 */
export const logout = async () => {
  const response = await apiPost('/users/logout', {});
  
  // Supprimer le token du localStorage
  localStorage.removeItem('token');
  
  return response;
};

export default {
  getAllUsers,
  getUserById,
  addUserClient,
  addUserClientWithImage,
  addUserAdmin,
  updateUser,
  deleteUser,
  login,
  logout,
};
