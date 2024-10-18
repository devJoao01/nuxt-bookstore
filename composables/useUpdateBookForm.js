import { ref } from 'vue';
import { useMyApi } from '@/store/myApi';

export function useUpdateBookForm() {
    const form = ref({
        title: '',
        author: '',
        isbn: '',
        publisher: '',
        publication_year: '',
    });

    const myApi = useMyApi();

    const updateBook = async (id, bookDetails) => {
        try {
            await myApi.updateBook(id, { ...bookDetails });
            resetForm(); 
        } catch (error) {
            console.log('Erro ao atualizar livro:', error);
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
        updateBook,
        resetForm,
    };
}
