import { useMyApi } from '@/store/myApi';
import Swal from 'sweetalert2';
import { messages } from '@/utils/messages';

export const useUpdateBook = () => {
    const { updateBook, books, $patch } = useMyApi();

    const updateBookAction = async (id, updatedBookData) => {
        try {
            const result = await Swal.fire({
                title: messages.update.title,
                text: messages.update.text,
                icon: messages.update.icon,
                showCancelButton: messages.update.showCancelButton,
                confirmButtonText: messages.update.confirmButtonText,
                cancelButtonText: messages.update.cancelButtonText,
            });

            if (result.isConfirmed) {
                await updateBook(id, updatedBookData);

                const index = books.findIndex(book => book.id === id);
                if (index !== -1) {
                    $patch(state => {
                        state.books[index] = { ...state.books[index], ...updatedBookData };
                    });
                }

                Swal.fire(messages.update.successTitle, messages.update.successText, messages.update.successIcon);
            }
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
            Swal.fire(messages.update.errorTitle, messages.update.errorText, messages.update.errorIcon);
        }
    };

    return { updateBookAction };
};
