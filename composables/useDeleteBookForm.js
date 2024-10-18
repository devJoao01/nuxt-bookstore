import { ref } from 'vue';
import { useMyApi } from '@/store/myApi';

export function useDeleteBookForm() {
    const form = ref({
        title: '',
        author: '',
        isbn: '',
        publisher: '',
        publication_year: '',
    });

    const errorMessage = ref('');
    const successMessage = ref('');

    const myApi = useMyApi(); 

    const deleteBook = async (id) => {
        try {
            await myApi.deleteBook(id); 
            resetForm();
            errorMessage.value = '';
        } catch (error) {
            console.log(error);
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
        successMessage.value = '';
    };

    return {
        form,
        deleteBook,
        errorMessage,
        successMessage,
        resetForm,
    };
}
