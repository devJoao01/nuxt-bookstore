import { ref, onMounted, computed } from "vue";
import { useIndexStore } from "./store/index.js";

export function useIndex() {
  const store = useIndexStore();
  
  const index = computed(() => store.getIndex);
  
  onMounted(() => {
    store.fetchIndex();
  });

  return { index };
}
