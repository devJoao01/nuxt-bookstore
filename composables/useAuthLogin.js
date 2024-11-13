// stores/auth.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useApi } from '~/composables/useApi'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const isAuthenticated = ref(false)
  const { api } = useApi()


  if (process.client) {
    const storedToken = localStorage.getItem('token')
    const storedEmail = localStorage.getItem('userEmail')
    const storedExpiration = localStorage.getItem('tokenExpiration')

    if (storedToken && storedEmail && storedExpiration) {
      const currentTime = new Date().getTime()

      if (currentTime > storedExpiration) {
        logout()
      } else {
        token.value = storedToken
        user.value = { email: storedEmail }
        isAuthenticated.value = true
      }
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password })
      token.value = response.data.token

      const expiresIn = response.data.expiresIn  
      const expirationDate = new Date().getTime() + expiresIn * 1000  

      if (process.client) {
        localStorage.setItem('token', token.value)
        localStorage.setItem('userEmail', email)
        localStorage.setItem('tokenExpiration', expirationDate)
      }

      isAuthenticated.value = true
      user.value = { email }

      return navigateTo('/teste')  
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      throw new Error('Credenciais inválidas')
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    isAuthenticated.value = false

    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('userEmail')
      localStorage.removeItem('tokenExpiration')
    }

    return navigateTo('/login') 
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout
  }
})
