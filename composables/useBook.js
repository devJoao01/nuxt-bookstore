import { ref } from 'vue';
import { useMyApi } from '@/store/myApi';

export const useBook = (id) => {
    const store = useMyApi();
    const book = ref(null);

    const fetchBook = async () => {
        await store.fetchBook(id);
        book.value = store.book;
    };

    return { book, fetchBook };
};
