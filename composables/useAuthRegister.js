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
        password_confirmation: confirmPassword.value,
      });

      if (response.data.message) {
        success.value = response.data.message;
      }

    } catch (err) {
      if (err.response && err.response.status === 422 && err.response.data.errors) {
        error.value = Object.values(err.response.data.errors).flat().join(' ');
      } else {
        error.value = 'Erro ao registrar. Tente novamente.';
      }
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
    handleRegister,
  };
}
