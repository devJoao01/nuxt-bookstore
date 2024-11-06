import { useMyApi } from '@/store/myApi';
import Swal from 'sweetalert2';
import { messages } from '@/utils/messages'; 

export const useDeleteBook = () => {
    const { deleteBook, books, $patch } = useMyApi();

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
                const index = books.findIndex(book => book.id === id);
                if (index !== -1) {
                    $patch(state => {
                        state.books = state.books.filter(book => book.id !== id);
                    });
                }
                Swal.fire(messages.delete.successTitle, messages.delete.successText, messages.delete.successIcon);
            }
        } catch (error) {
            console.error('Erro ao deletar livro:', error);
            Swal.fire(messages.delete.errorTitle, messages.delete.errorText, messages.delete.errorIcon);
        }
    };

    return { deleteBookAction };
};
