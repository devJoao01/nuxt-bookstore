<template>
  <section class="list-options">
    <div class="col-lg-10 mx-auto">
      <ul>
        <div class="box-title">
          <h2 class="title">Deletar</h2>
          <div class="page">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae officia optio eum</p>
          </div>
        </div>
        <li v-for="book in books" :key="book.id">
          <h3>{{ book.title }} - {{ book.author }}</h3>
          <button @click="deleteBook(book.id)">Deletar</button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';
import { useBooks } from '../composables/useBook';
import { useDeleteBookForm } from '@/composables/useDeleteBookForm.js';

export default {
  setup() {
    const { books, fetchBooks } = useBooks();
    const { deleteBook, errorMessage, successMessage } = useDeleteBookForm();

    onMounted(() => {
      fetchBooks();
    });

    return {
      books,
      deleteBook,
    };
  },
};
</script>

<style scoped src="../assets/css/delete-form.css"></style>