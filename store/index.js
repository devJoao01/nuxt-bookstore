import { defineStore } from 'pinia';
import axios from "axios";

export const useIndexStore = defineStore('index', {
    state: () => ({
        index: [],
    }),
    getters: {
        getIndex(state) {
            return state.index
        }
    },
    actions: {
        async fetchIndex() {
            try {
                const response = await axios.get('http://localhost/wordpress/wp-json/myportfolio/v1/informations')
                this.index = [response.data]
                
            } catch (e) {
                console.log(e)
            }
        }
    },
})