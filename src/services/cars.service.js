/**
 * Service spécifique pour gérer les voitures (cars)
 */

import { apiGet, apiPost, apiPut, apiDelete, apiPostWithFile } from './api.service';

/**
 * Récupère toutes les voitures
 */
export const getAllCars = async () => {
  return apiGet('/cars');
};

/**
 * Récupère les voitures disponibles
 */
export const getAvailableCars = async () => {
  return apiGet('/cars/available');
};

/**
 * Récupère une voiture par ID
 */
export const getCarById = async (id) => {
  return apiGet(`/cars/${id}`);
};

/**
 * Ajoute une nouvelle voiture
 */
export const addCar = async (carData) => {
  return apiPost('/cars', carData);
};

/**
 * Ajoute une voiture avec image
 */
export const addCarWithImage = async (carData, imageFile) => {
  const formData = new FormData();
  
  // Ajouter tous les champs de carData
  Object.keys(carData).forEach(key => {
    formData.append(key, carData[key]);
  });
  
  // Ajouter l'image
  if (imageFile) {
    formData.append('image', imageFile);
  }
  
  return apiPostWithFile('/cars', formData);
};

/**
 * Met à jour une voiture
 */
export const updateCar = async (id, carData) => {
  return apiPut(`/cars/${id}`, carData);
};

/**
 * Met à jour une voiture avec image
 */
export const updateCarWithImage = async (id, carData, imageFile) => {
  const formData = new FormData();
  
  // Ajouter tous les champs de carData
  Object.keys(carData).forEach(key => {
    formData.append(key, carData[key]);
  });
  
  // Ajouter l'image si fournie
  if (imageFile) {
    formData.append('image', imageFile);
  }
  
  return apiPostWithFile(`/cars/${id}`, formData);
};

/**
 * Supprime une voiture
 */
export const deleteCar = async (id) => {
  return apiDelete(`/cars/${id}`);
};

export default {
  getAllCars,
  getAvailableCars,
  getCarById,
  addCar,
  addCarWithImage,
  updateCar,
  updateCarWithImage,
  deleteCar,
};
