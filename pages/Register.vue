<!-- components/RegisterForm.vue -->
<template>
  <form @submit.prevent="handleRegister">
    <input v-model="name" placeholder="Nome" type="text" />
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Senha" type="password" />
    <input v-model="confirmPassword" placeholder="Confirme a Senha" type="password" />
    <button type="submit">Registrar</button>
    
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="success" class="success">{{ success }}</p>
  </form>
</template>

<script setup>
import { useAuthRegister } from '@/composables/useAuthRegister';

const { name, email, password, confirmPassword, error, success, handleRegister } = useAuthRegister();
</script>

<style scoped>
.error {
  color: red;
}
.success {
  color: green;
}
</style>
