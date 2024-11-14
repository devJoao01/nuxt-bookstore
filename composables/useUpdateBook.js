import Swal from 'sweetalert2';
import axios from 'axios';
import { messages } from '@/utils/messages';

export function useUpdateBook() {
  const updateBookAction = async (bookId, currentBookData) => {
    const { value: formValues } = await Swal.fire({
      title: 'Atualizar Livro',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Título" value="${currentBookData.title}" />
        <input id="swal-input2" class="swal2-input" placeholder="Autor" value="${currentBookData.author}" />
        <input id="swal-input3" class="swal2-input" placeholder="ISBN" value="${currentBookData.isbn}" />
        <input id="swal-input4" class="swal2-input" placeholder="Editora" value="${currentBookData.publisher}" />
        <input id="swal-input5" class="swal2-input" placeholder="Ano de Publicação" value="${currentBookData.publication_year}" />
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: document.getElementById('swal-input1').value,
          author: document.getElementById('swal-input2').value,
          isbn: document.getElementById('swal-input3').value,
          publisher: document.getElementById('swal-input4').value,
          publication_year: document.getElementById('swal-input5').value,
        };
      },
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Atualizar',
      cancelButtonColor: '#d33',
    });

    if (formValues) {
      try {
        const response = await axios.put(`http://localhost:8001/api/books/${bookId}`, formValues);

        Swal.fire({
          icon: 'success',
          title: messages.update.successTitle,
          text: messages.update.successText,
        });

        console.log('Livro atualizado com sucesso!', response.data);
      } catch (error) {
        console.error('Erro ao atualizar o livro:', error);

        Swal.fire({
          icon: 'error',
          title: messages.update.errorTitle,
          text: messages.update.errorText,
        });
      }
    }
  };

  return {
    updateBookAction,
  };
}
