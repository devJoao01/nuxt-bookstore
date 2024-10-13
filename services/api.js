import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8001', 
});

export const getBooks = () => api.get('/books'); 
export const getBook = (id) => api.get(`/books/${id}`); 
export const createBook = (book) => api.post('/books', book);
export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);
