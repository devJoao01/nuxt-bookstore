import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8001', 
});

export const getItems = () => api.get('/books'); 
export const getItem = (id) => api.get(`/books/${id}`); 
export const createItem = (book) => api.post('/books', book);
export const updateItem = (id, book) => api.put(`/books/${id}`, book);
export const deleteItem = (id) => api.delete(`/books/${id}`);
