import axios from 'axios';

const API_URL = import.meta.env.VITE_BAND_URL;

//* Fetch all bands
export const getBands = () => axios.get(API_URL);

//* Fetch a band by ID
export const getBand = (id) => axios.get(`${API_URL}/${id}`);

//* Create a new band
export const createBand = (newBand) => axios.post(API_URL, newBand);

//* Update an existing band by ID
export const updateBand = (id, updatedBand) => axios.patch(`${API_URL}/${id}`, updatedBand);

//* Delete a band by ID
export const deleteBand = (id) => axios.delete(`${API_URL}/${id}`);
