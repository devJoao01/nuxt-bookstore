// import { handleError, ref } from 'vue';
// import { useUserStore } from "@/store/userStore";
// import { login } from "../services/api";
// import { useRouter } from 'vue-router'; 

// export const useAuth = () => {
//     const userStore = useUserStore();
//     const email = ref('');
//     const password = ref('');
//     const error = ref(null);
//     const router = useRouter();

//     const handleLogin = async () => {
//         console.log('Tentando fazer login...');
//         try {
//             const response = await login(email.value, password.value)

//             userStore.user = response.data.user;
//             userStore.token = response.data.token;

//             localStorage.setItem('token', userStore.token);

//             error.value = null;


//             router.push('/');
//         } catch (error) {
//             console.error('Erro no login:', error);
//             error.value = 'Falha ao fazer login. Verifique suas credenciais.';
//         }
//     };

//     return{
//         email,
//         password,
//         error,
//         handleLogin
//     }
// }