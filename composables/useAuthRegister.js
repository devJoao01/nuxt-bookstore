// composables/useAuthRegister.js
import { ref } from 'vue';
import axios from 'axios';

export function useAuthRegister() {
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const error = ref(null);
  const success = ref(null);

  const handleRegister = async () => {
    // Verificar se as senhas coincidem
    if (password.value !== confirmPassword.value) {
      error.value = 'As senhas não coincidem';
      return;
    }

    error.value = null;
    success.value = null;

    try {
      const response = await axios.post('http://localhost:8001/api/register', {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value, // Enviando com o nome correto
      });

      success.value = 'Registro realizado com sucesso!';
      // Armazenar o token, se necessário, ou fazer redirecionamento
      // Exemplo: localStorage.setItem('token', response.data.access_token);
    } catch (err) {
      error.value = 'Erro ao registrar. Tente novamente.';
      console.error(err);
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    error,
    success,
    handleRegister
  };
}
