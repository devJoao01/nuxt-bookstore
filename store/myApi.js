import { defineStore } from 'pinia';
import { getItems, getItem, createItem, updateItem, deleteItem } from '@/services/api';

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
            } catch (error) {
                console.error('Erro ao criar o livro:', error);
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
                await deleteItem(id);
                await this.fetchBooks();
            } catch (error) {
                console.error('Erro ao deletar o livro:', error);
            }
        }
    },
});
