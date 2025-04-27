import axios from 'axios';

const API_URL = import.meta.env.VITE_FOOD_URL;

export const getFoods = () => axios.get(API_URL);
export const getFood = (id) => axios.get(`${API_URL}/${id}`);
export const createFood = (newFood) => axios.post(API_URL, newFood);
export const updateFood = (id, updatedFood) => axios.patch(`${API_URL}/${id}`, updatedFood);
export const deleteFood = (id) => axios.delete(`${API_URL}/${id}`);
