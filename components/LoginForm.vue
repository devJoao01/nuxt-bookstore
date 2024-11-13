<!-- components/Login.vue -->
<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>

      <div>
        <label for="password">Senha</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <button type="submit" :disabled="isLoading">
        {{ isLoading ? 'Entrando...' : 'Entrar' }}
      </button>

      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/composables/useAuthLogin'

const email = ref('')
const password = ref('')
const error = ref(null)
const isLoading = ref(false)

const authStore = useAuthStore()

const handleLogin = async () => {
  isLoading.value = true
  error.value = null

  try {
    await authStore.login(email.value, password.value)
  } catch (err) {
    error.value = err.message || 'Erro ao fazer login'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Estilos básicos para o componente de login */
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input {
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
