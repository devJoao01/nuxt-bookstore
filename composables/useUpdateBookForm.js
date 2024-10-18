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

    const UpdateBook = async (id, bookDetails) => {
        try {
            form.value = { ...bookDetails }; 
            await myApi.updateBook(id, form.value);
            resetForm();
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
    }

    return {
        form,
        UpdateBook,
        resetForm,
    };
}
