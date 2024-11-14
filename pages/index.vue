<template>
  <Header />
  <ListView />
</template>
<script setup>
definePageMeta({
  middleware: 'sanctum:auth'
});
</script>