<template>
    <div>
        <form @submit.prevent="handleLogin">
            <input v-model="email" placeholder="Email" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
            <div v-if="error">{{ error }}</div>
        </form>
    </div>
</template>

<script setup>
import { useAuth } from '@/composables/useAuth';

const { email, password, error, handleLogin } = useAuth();
</script>