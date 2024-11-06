// import { defineStore } from 'pinia';
// import { login, register } from '@/services/api';

// export const useUserStore = defineStore('user', {
//     state: () => ({
//         user: null,
//         token: null,
//     }),

//     actions: {
//         async loginUser(email, password) {
//             try {
//                 const response = await login(email, password);
//                 this.user = response.data.user;
//                 this.token = response.data.access_token;

//                 localStorage.setItem('token', this.token)
//             } catch (error) {
//                 console.log(error);
//                 throw error;
//             }
//         },

//         // async logoutUser() {
//         //     try {
//         //         this.user = null;
//         //         this.token = null;

//         //         localStorage.removeItem('token')
//         //     } catch (error) {
//         //         console.log(error);
//         //         throw error;
//         //     }
//         // },

//         async registerUser(userData) {
//             try {
//                 const response = await register(userData);
//                 this.user = response.data.user;
//                 this.token = response.data.access_token;

//                 localStorage.setItem('token', this.token)
//             } catch (error) {
//                 console.log(error);
//                 throw error;
//             }
//         },

//         isAuthenticated() {
//             return !!this.token;
//         }
//     }
// })