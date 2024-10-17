<template>
  <div>
    <ul>
      <li v-for="book in books" :key="book.id">
        <h3>{{ book.title }} - {{ book.author }}</h3>
      </li>
    </ul>
  </div>

  <Form />
</template>


<script setup>
import { onMounted } from 'vue';
import { useBooks } from '../composables/useBook';

const { books, fetchBooks } = useBooks();

onMounted(fetchBooks);
</script>
