import { ref } from 'vue'

const abaAtiva = ref('explorador')

export function useAbas() {
  const alternarAba = (nomeAba) => abaAtiva.value = (abaAtiva.value === nomeAba) ? null : nomeAba
  const fecharAba = () => abaAtiva.value = null
  const abrirAba = (nomeAba) => abaAtiva.value = nomeAba

  return {
    abaAtiva,
    alternarAba,
    fecharAba,
    abrirAba
  }
}
