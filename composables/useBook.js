import { ref } from 'vue';
import { useMyApi } from '../store/myApi';

export const useBooks = () => {
  const store = useMyApi();
  const error = ref(null);
  const books = ref([]);

  const fetchBooks = async () => {
    try {
      await store.fetchBooks();
      books.value = store.books;
    } catch (err) {
      error.value = 'Erro ao buscar os livros';
    }
  };

  return { books, error, fetchBooks };
};
