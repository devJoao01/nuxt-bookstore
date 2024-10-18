import { defineStore } from 'pinia';
import { getItems, getItem, createItem, updateItem, deleteItem } from '@/services/api';
import Swal from 'sweetalert2'

export const useMyApi = defineStore('myApi', {
    state: () => ({
        books: [],
        book: null,
    }),
    actions: {
        async fetchBooks() {
            try {
                const response = await getItems();
                this.books = response.data;
            } catch (error) {
                console.error('Erro ao buscar os livros:', error);
            }
        },
        async fetchBook(id) {
            try {
                const response = await getItem(id);
                this.book = response.data;
            } catch (error) {
                console.error('Erro ao buscar o livro:', error);
            }
        },
        async createBook(book) {
            try {
                const response = await createItem(book);
                this.books.push(response.data);
                Swal.fire({
                    title: "SUCESSO!!",
                    text: "LIVRO REGISTRADO COM SUCESSO!",
                    icon: "success"
                });
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Erro ao criar o livro: ${error.message}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        },


        async updateBook(id, book) {
            try {
                await updateItem(id, book);
                await this.fetchBook(id);
            } catch (error) {
                console.error('Erro ao atualizar o livro:', error);
            }
        },
        

        async deleteBook(id) {
            try {
                const result = await Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                });

                if (result.isConfirmed) {
                    const response = await deleteItem(id);
                    this.books = this.books.filter(book => book.id !== response.data.id);

                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                    return response.data;
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        }
    },
});
