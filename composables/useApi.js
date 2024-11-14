import axios from 'axios'

export const useApi = () => {
  const api = axios.create({
    baseURL: 'http://localhost:8001/api/', 
  })

  api.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  return { api }
}
