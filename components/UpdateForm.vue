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
                                <img src="https://down-br.img.susercontent.com/file/96d5d8ddded82cb210711234ad18c752"
                                    alt="">
                            </div>
                            <div class="card-body">
                                <h2 class="title">{{ book.title }}</h2>
                                <span>{{ book.author }}</span>
                                <span>{{ book.isbn }}</span>
                                <span>{{ book.publisher }}</span>
                                <span>{{ book.publication_year }}</span>
                                <button @click="populateForm(book)">Atualizar Livro</button>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        </ul>
        <div v-if="formVisible" class="update-form">
            <h2>Atualizar Livro</h2>
            <form class="form-layout" @submit.prevent="submitUpdate">
                <div>
                    <label>Título:</label>
                    <input class="form-control" v-model="form.title" type="text" required />
                </div>
                <div>
                    <label>Autor:</label>
                    <input class="form-control" v-model="form.author" type="text" required />
                </div>
                <div>
                    <label>ISBN:</label>
                    <input class="form-control" v-model="form.isbn" type="text" required />
                </div>
                <div>
                    <label>Editora:</label>
                    <input class="form-control" v-model="form.publisher" type="text" required />
                </div>
                <div>
                    <label>Ano de Publicação:</label>
                    <input class="form-control" v-model="form.publication_year" type="number" required />
                </div>
                <div class="btn-box">
                    <button type="submit">Salvar Alterações</button>
                <button type="button" @click="cancelUpdate">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useBooks } from '../composables/useBook';
import { useUpdateBookForm } from '@/composables/useUpdateBookForm.js';

export default {
    setup() {
        const { books, fetchBooks } = useBooks();
        const { form, updateBook, resetForm } = useUpdateBookForm();
        const formVisible = ref(false);
        const currentBookId = ref(null);

        onMounted(() => {
            fetchBooks();
        });

        const populateForm = (book) => {
            form.value = { ...book };
            currentBookId.value = book.id;
            formVisible.value = true;
        };

        const submitUpdate = async () => {
            await updateBook(currentBookId.value, form.value);
            formVisible.value = false;
            fetchBooks();
        };

        const cancelUpdate = () => {
            resetForm();
            formVisible.value = false;
        };

        return {
            books,
            form,
            populateForm,
            submitUpdate,
            cancelUpdate,
            formVisible,
        };
    },
};
</script>

<style scoped src="../assets/css/update-form.css"></style>
