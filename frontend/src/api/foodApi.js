import axios from 'axios';

const API_URL = import.meta.env.VITE_FOOD_URL;

//* Fetch all foods
export const getFoods = () => axios.get(API_URL);

//* Fetch a food by ID
export const getFood = (id) => axios.get(`${API_URL}/${id}`);

//* Create a new food
export const createFood = (newFood) => axios.post(API_URL, newFood);

//* Update an existing food by ID
export const updateFood = (id, updatedFood) => axios.patch(`${API_URL}/${id}`, updatedFood);

//* Delete a food by ID
export const deleteFood = (id) => axios.delete(`${API_URL}/${id}`);
