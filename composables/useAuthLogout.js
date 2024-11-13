// composables/useAuthLogout.js
import { useNuxtApp } from '#app';

export function useAuthLogout() {
  const { $authSanctum } = useNuxtApp();  // Acessa o módulo de autenticação

  const handleLogout = async () => {
    try {
      await $authSanctum.logout();
    } catch (err) {
      console.error('Erro no logout:', err);
    }
  };

  return {
    handleLogout,
  };
}
