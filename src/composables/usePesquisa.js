import { ref } from 'vue'

const termoPesquisa = ref('')

export function usePesquisa() {
  return {
    termoPesquisa
  }
}
