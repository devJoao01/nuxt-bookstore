<template>
  <div class="list-options col-lg-10 mx-auto">
    <ul>
      <div class="box-title">
        <h2>Deletar</h2>
        <div class="page">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <button @click="deleteBook(book.id)">Deletar</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    </ul>
  </div>
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