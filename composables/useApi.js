// composables/useApi.js
import axios from 'axios'

export const useApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:8001/api/', 
  })

  // Configurar o token do usuário para as requisições
  api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, error => {
    // Tratar erros no interceptor, caso necessário
    return Promise.reject(error)
  })

  return { api }
}
