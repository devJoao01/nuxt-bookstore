import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8001', 
});

export const getItems = () => api.get('/api/books'); 
export const getItem = (id) => api.get(`/api/books/${id}`); 
export const createItem = (book) => api.post('/api/books', book);
export const updateItem = (id, book) => api.put(`/api/books/${id}`, book);
export const deleteItem = (id) => api.delete(`/api/books/${id}`);

// Auth Functions
export const login = (email, password) => api.post('/api/login', { email, password });
export const register = (userData) => api.post('/api/register', userData);
// export const logout = () => api.post('/api/token/revoke/');
