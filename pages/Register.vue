<template>
  <div class="container">
    <div class="register-container">
      <form @submit.prevent="handleRegister">
        <div class="form-layout col-lg-6 mx-auto">
          <h2 class="title">
            <div class="icon">
              <img src="../assets/imgs/logo.png" alt="">
            </div>
            Registrar-se
          </h2>
          <div class="form-group">
            <input v-model="name" placeholder="Nome" type="text" />
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'user']" />
            </div>
          </div>
          <div class="form-group">
            <input v-model="email" placeholder="Email" type="email" />
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
          </div>
          <div class="form-group">
            <input v-model="password" placeholder="Senha" type="password" />
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </div>
          </div>
          <div class="form-group">
            <input v-model="confirmPassword" placeholder="Confirme a Senha" type="password" />
            <div class="icon">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </div>
          </div>
          <NuxtLink to="/login">
            Ir para o Login
          </NuxtLink>
          <div class="form-group">
            <button type="submit">Registrar</button>
          </div>
          <p v-if="error" class="error">{{ error }}</p>
          <p v-if="success" class="success">{{ success }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthRegister } from '@/composables/useAuthRegister';

const { name, email, password, confirmPassword, error, success, handleRegister } = useAuthRegister();
</script>

<style src="../assets/css/components/deafult-form.css"></style>
