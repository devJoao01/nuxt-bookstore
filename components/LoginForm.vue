<template>
    <div class="container">
        <form @submit.prevent="">
            <div class="form-layout col-lg-6 mx-auto">
                <div class="title">
                    <h2>Login</h2>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type="text"  placeholder="Email" />
                   <div class="icon">
                    <font-awesome-icon :icon="['fas', 'user']" />
                   </div>
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input class="form-control" type="password"  placeholder="Password" />
                    <div class="icon">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                    </div>
                </div>
                <div class="form-group">
                    <p>Esqueceu a Senha?</p>
                </div>
                <div class="form-group">
                    <p>Registrar-se</p>
                </div>
                <div class="form-group">
                    <button class="submit-form"  type="submit">Login</button>
                </div>
                <!-- <div v-if="error">{{ error }}</div> -->
            </div>
        </form>
    </div>
</template>

<!-- <script setup>
import { useAuth } from '@/composables/useAuth';

const { email, password, error, handleLogin } = useAuth();
</script> -->

<style src="../assets/css/components/login-card.css"></style>