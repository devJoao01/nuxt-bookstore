<template>
    <div class="container">
        <div class="login-container">
            <form @submit.prevent="handleLogin">
                <div class="form-layout col-lg-6 mx-auto">
                    <h2 class="title">
                        <div class="icon">
                            <img src="../assets/imgs/logo.png" alt="">
                        </div>
                        Login
                    </h2>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="email" type="email" id="email" required />
                        <div class="icon">
                            <font-awesome-icon :icon="['fas', 'user']" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Senha</label>
                        <input v-model="password" type="password" id="password" required />
                        <div class="icon">
                            <font-awesome-icon :icon="['fas', 'lock']" />
                        </div>
                    </div>
                    <NuxtLink to="/register">
            Registrar-se
          </NuxtLink>
                    <div class="form-group">
                        <button type="submit" :disabled="isLoading">
                        {{ isLoading ? 'Entrando...' : 'Entrar' }}
                    </button>
                    </div>
                    <div v-if="error" class="error">{{ error }}</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const { login } = useSanctumAuth();

const email = ref('')
const password = ref('')
const error = ref(null)
const isLoading = ref(false)

const handleLogin = async () => {
    isLoading.value = true
    error.value = null

    try {
        const userCredentials = {
            email: email.value,
            password: password.value,
        };

        await login(userCredentials);
    } catch (err) {
        error.value = err.message || 'Erro ao fazer login'
    } finally {
        isLoading.value = false
    }
}
</script>

<style src="../assets/css/components/deafult-form.css"></style>