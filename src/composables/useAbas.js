import { ref } from 'vue'

const abaAtiva = ref(null)

export function useAbas() {
  const alternarAba = (nomeAba) => {
    if (abaAtiva.value === nomeAba) {
      abaAtiva.value = null
    } else {
      abaAtiva.value = nomeAba
    }
  }

  const fecharAba = () => {
    abaAtiva.value = null
  }

  const abrirAba = (nomeAba) => {
    abaAtiva.value = nomeAba
  }

  return {
    abaAtiva,
    alternarAba,
    fecharAba,
    abrirAba
  }
}
