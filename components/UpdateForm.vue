<template>
    <div class="list-options col-lg-10 mx-auto" >
        <ul>
            <div class="box-title">
                <h2>Deletar</h2>
                <div class="page">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <li v-for="book in books" :key="book.id">
                <h3>{{ book.title }} - {{ book.author }}</h3>
                <button @click="updateBook(book.id, book)">Atualizar Livro</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useBooks } from '../composables/useBook';
import { useUpdateBookForm } from '@/composables/useUpdateBookForm.js';

export default {
    setup() {
        const { books, fetchBooks } = useBooks();
        const { updateBook } = useUpdateBookForm();

        onMounted(() => {
            fetchBooks();
        });

        return {
            books,
            updateBook,
        };
    },
};
</script>

<style scoped src="../assets/css/update-form.css"></style>