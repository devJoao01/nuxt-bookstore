<template>
  <div class="row">
    <div v-for="book in allBooks" :key="book.id" class="col-md-6 col-xxl-3">
      <div class="card">
        <div class="card-thumb">
          <img src="https://down-br.img.susercontent.com/file/96d5d8ddded82cb210711234ad18c752" alt="" />
        </div>
        <div class="card-body">
          <h2 class="title">{{ book.title }}</h2>
          <span><strong>AUTOR:</strong>{{ book.author }}</span>
          <span><strong>ISBN:</strong>{{ book.isbn }}</span>
          <span><strong>PUBLICAÇÃO:</strong>{{ book.publisher }}</span>
          <span><strong>ANO DE PUBLICAÇÃO:</strong>{{ book.publication_year }}</span>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-lg-6">
              <button @click="handleDelete(book.id)" class="btn btn-danger">Deletar</button>
            </div>
            <div class="col-lg-6">
              <button @click="handleUpdate(book)" class="btn btn-success">Atualizar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useMyApi } from '@/store/myApi';
import { useDeleteBook } from '../composables/useDeleteBook';
import { useUpdateBook } from '../composables/useUpdateBook';

const store = useMyApi();

const { allBooks } = storeToRefs(store); 

const { deleteBookAction } = useDeleteBook();
const { updateBookAction } = useUpdateBook();

onMounted(async () => {
  await store.fetchBooks(); 
  console.log(allBooks.value); 
});

const handleDelete = async (id) => {
  await deleteBookAction(id); 
  await store.fetchBooks(); 
};

const handleUpdate = async (book) => {
  await updateBookAction(book.id, book); 
  await store.fetchBooks(); 
};
</script>

<style scoped src="../assets/css/components/book-card.css"></style>
