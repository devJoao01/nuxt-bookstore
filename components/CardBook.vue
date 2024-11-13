<template>
    <div class="row">
        <div v-for="book in books" :key="book.id" class="col-md-6 col-xxl-3">
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
                <div class="card-footer">
                    <div class="row">
                        <div class="col-lg-6">
                            <button @click="handleDelete(book.id)" class="btn btn-danger">Deletar</button>
                        </div>
                        <div class="col-lg-6">
                            <button @click="handleDelete(book.id)" class="btn btn-success">Atualizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useListViewBooks } from '../composables/useListViewBooks';
import { useDeleteBook } from '../composables/useDeleteBook';

const { books, fetchBooks } = useListViewBooks();
const { deleteBookAction } = useDeleteBook();

onMounted(fetchBooks);

const handleDelete = (id) => {
    deleteBookAction(id);
};
</script>

<style scoped src="../assets/css/components/book-card.css"></style>
