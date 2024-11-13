<template>
    <button @click="handleLogout">Logout</button>
  </template>
  
  <script setup lang="ts">
  import { useAuthLogout } from '~/composables/useAuthLogout';
  
  const { handleLogout } = useAuthLogout();
  </script>
  