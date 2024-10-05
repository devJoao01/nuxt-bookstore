<template>
  <main id="home-page">
    <section v-if="index.length > 0" class="box-apresentation">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="page white">
              <p v-html="index[0].data.text"></p>
            </div>
            <div class="btn-links">
              <a :href="index[0].data.link_sobre">sobre</a>
              <a :href="index[0].data.link_projeto">projects</a>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1">
            <picture>
              <img :src="index[0].data.image" alt="">
            </picture>
          </div>
        </div>
      </div>
    </section>

    <section v-if="index.length > 0" class="box-about">
      <div class="container">
        <div class="page">
          <p v-html="index[0].data.about_text"></p>
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>
import { useIndex } from "@/composables/useIndex";
const { index } = useIndex();


</script>

<style src="@/assets/css/home.css" scoped></style>
