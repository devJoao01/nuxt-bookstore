<template>
  <section class="col-lg-10 mx-auto">
    <ul class="list-options">
      <div class="box-title">
        <h2 class="title">
          LIST BOOKS
        </h2>
        <div class="page">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus odio facere repellendus optio ut numquam
            quae praesentium, deserunt nam similique, officiis cum suscipit aliquam voluptatibus. Pariatur nihil
            perferendis eligendi. Qui!</p>
        </div>
      </div>
      <div class="row">
        <div v-for="book in books" :key="book.id" class="col-md-6 col-xxl-4">
          <li>
            <div class="card">
              <div class="card-thumb">
                <img src="https://down-br.img.susercontent.com/file/96d5d8ddded82cb210711234ad18c752" alt="">
              </div>
              <div class="card-body">
                <h2 class="title">{{ book.title }}</h2>
                <span>{{ book.author }}</span>
                <span>{{ book.isbn }}</span>
                <span>{{ book.publisher }}</span>
                <span>{{ book.publication_year }}</span>
              </div>
            </div>
          </li>
        </div>
      </div>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useBooks } from '../composables/useBook';

const { books, fetchBooks } = useBooks();

onMounted(fetchBooks);
</script>

<style scoped src="../assets/css/list-view.css"></style>