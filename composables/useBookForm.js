import { ref } from 'vue';
import { useMyApi } from '@/store/myApi';
import { useRouter } from 'vue-router';
const router = useRouter();

export function useBookForm() {
  const form = ref({
    title: '',
    author: '',
    isbn: '',
    publisher: '',
    publication_year: '',
  });

  const errorMessage = ref('');
  const myApi = useMyApi();

  const submitForm = async () => {
    try {
      await myApi.createBook(form.value);

      resetForm();
      errorMessage.value = '';
      console.log(router);
      router.push('/dashboard')
    } catch (error) {
      // errorMessage.value = 'Erro ao cadastrar o livro. Tente novamente.';
    }
  };

  const resetForm = () => {
    form.value = {
      title: '',
      author: '',
      isbn: '',
      publisher: '',
      publication_year: '',
    };
  };

  return {
    form,
    submitForm,
    errorMessage,
    resetForm,
  };
}
