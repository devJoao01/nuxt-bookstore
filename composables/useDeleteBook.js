import { storeToRefs } from 'pinia';

import { useMyApi } from '@/store/myApi';
import Swal from 'sweetalert2';
import { messages } from '@/utils/messages';

export const useDeleteBook = () => {
    const { deleteBook, fetchBooks, books } = useMyApi(); 

    const { allBooks } = storeToRefs(books); 

    const deleteBookAction = async (id) => {
        try {
            const result = await Swal.fire({
                title: messages.delete.title,
                text: messages.delete.text,
                icon: messages.delete.icon,
                showCancelButton: messages.delete.showCancelButton,
                confirmButtonText: messages.delete.confirmButtonText,
                cancelButtonText: messages.delete.cancelButtonText,
            });

            if (result.isConfirmed) {
                await deleteBook(id); 
                await fetchBooks(); 
                Swal.fire(messages.delete.successTitle, messages.delete.successText, messages.delete.successIcon);
            }
        } catch (error) {
            console.error('Erro ao deletar livro:', error);
            Swal.fire(messages.delete.errorTitle, messages.delete.errorText, messages.delete.errorIcon);
        }
    };

    return { deleteBookAction };
};
