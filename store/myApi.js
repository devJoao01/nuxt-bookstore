import { defineStore } from 'pinia';
import { getItems, getItem, createItem, updateItem, deleteItem } from '@/services/api';
import { messages } from '@/utils/messages';
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
                Swal.fire(messages.error);
            }
        },

        async fetchBook(id) {
            try {
                const response = await getItem(id);
                this.book = response.data;
            } catch (error) {
                console.error('Erro ao buscar o livro:', error);
                Swal.fire(messages.error);
            }
        },

        async createBook(book) {
            try {
                const response = await createItem(book);
                this.books.push(response.data);
                Swal.fire(messages.success);
            } catch (error) {
                console.error('Erro ao criar o livro:', error);
                Swal.fire(messages.error);
            }
        },

        async updateBook(id, book) {
            try {
                const response = await updateItem(id, book);
                const index = this.books.findIndex(b => b.id === id);
                if (index !== -1) {
                    this.books[index] = response.data;
                }
                Swal.fire(messages.success);
            } catch (error) {
                console.error('Erro ao atualizar o livro:', error);
                Swal.fire(messages.error);
            }
        },

        async deleteBook(id) {
            try {
                await deleteItem(id);
                this.books = this.books.filter(b => b.id !== id);
                Swal.fire(messages.success);
            } catch (error) {
                console.error('Erro ao excluir o livro:', error);
                Swal.fire(messages.error);
            }
        }
    },


    getters: {
        // Retorna todos os livros
        allBooks(state) {
            return state.books;
        },

        // Retorna o livro atual (único)
        currentBook(state) {
            return state.book;
        },

        // Retorna o número de livros armazenados
        bookCount(state) {
            return state.books.length;
        },

        // Verifica se há livros na lista
        hasBooks(state) {
            return state.books.length > 0;
        },

        // Filtra os livros que contêm um termo na title
        filteredBooks: (state) => (searchTerm) => {
            return state.books.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        },

        // Verifica se o livro está na lista
        isBookInList: (state) => (bookId) => {
            return state.books.some(book => book.id === bookId);
        }
    },
});
