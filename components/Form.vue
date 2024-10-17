<template>
  <div>
    <h2>Cadastrar Livro</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="form.title" required />
      </div>
      <div>
        <label for="author">Autor:</label>
        <input type="text" id="author" v-model="form.author" required />
      </div>
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" id="isbn" v-model="form.isbn" required />
      </div>
      <div>
        <label for="publisher">Editora:</label>
        <input type="text" id="publisher" v-model="form.publisher" required />
      </div>
      <div>
        <label for="publication_year">Ano de Publicação:</label>
        <input type="number" id="publication_year" v-model="form.publication_year" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { useBookForm } from '@/composables/useBookForm';

export default {
  setup() {
    const { form, submitForm, errorMessage } = useBookForm();

    return {
      form,
      submitForm,
      errorMessage,
    };
  },
};
</script>

<style>
.error {
  color: red;
}
</style>
