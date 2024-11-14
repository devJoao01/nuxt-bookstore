import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8001',  
});

api.interceptors.response.use(
    response => response,
    error => {
        console.error('Erro na requisição:', error.response ? error.response.data : error.message);
        return Promise.reject(error);
    }
);


export const getItems = () => api.get('/api/books');  
export const getItem = (id) => api.get(`/api/books/${id}`);  
export const createItem = (book) => api.post('/api/books', book);
export const updateItem = (id, book) => api.put(`/api/books/${id}`, book);  
export const deleteItem = (id) => api.delete(`/api/books/${id}`); 
