import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', 
});

export const getItems = () => api.get('/api/books'); 
export const getItem = (id) => api.get(`/api/books/${id}`); 
export const createItem = (book) => api.post('/api/books', book);
export const updateItem = (id, book) => api.put(`/api/books/${id}`, book);
export const deleteItem = (id) => api.delete(`/api/books/${id}`);
