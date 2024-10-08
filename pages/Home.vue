<template>
  <main id="home-page">
    <section v-if="index.length > 0">
      <div class="container">
        <div class="row">
          <h2>API</h2>
          <p>{{ index[0].home.fields.title }}</p>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>
import { useIndex } from "../composables/useIndex";
const { index } = useIndex();


</script>

<style src="@/assets/css/home.css" scoped></style>
