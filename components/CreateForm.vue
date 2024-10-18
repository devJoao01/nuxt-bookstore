<template>
  <div>
    <section class="form-create col-lg-10 mx-auto">
      <div class="box-title">
        <h2 class="title">Cadastrar Livro</h2>
        <div class="page">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae officia optio eum</p>
        </div>
      </div>
      <form class="form-layout" @submit.prevent="submitForm">
        <div>
          <label for="title">Título:</label>
          <input class="form-control" type="text" id="title" v-model="form.title" required />
        </div>
        <div>
          <label for="author">Autor:</label>
          <input class="form-control" type="text" id="author" v-model="form.author" required />
        </div>
        <div>
          <label for="isbn">ISBN:</label>
          <input class="form-control" type="text" id="isbn" v-model="form.isbn" required />
        </div>
        <div>
          <label for="publisher">Editora:</label>
          <input class="form-control" type="text" id="publisher" v-model="form.publisher" required />
        </div>
        <div>
          <label for="publication_year">Ano de Publicação:</label>
          <input class="form-control" type="number" id="publication_year" v-model="form.publication_year" required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </section>
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

<style scoped src="../assets/css/create-form.css"></style>
