import { ref } from 'vue'

const abas = ref([])
const abaAtivaId = ref(null)

let proximoId = 1

export function useEditorAbas() {
  const adicionarAba = (titulo, conteudo = '', tipo = 'texto', caminho = null) => {
    if (caminho) {
      const abaExistente = abas.value.find(aba => aba.caminho === caminho)
      if (abaExistente) {
        abaAtivaId.value = abaExistente.id
        return abaExistente
      }
    }

    const novaAba = {
      id: proximoId++,
      titulo,
      conteudo,
      tipo,
      caminho
    }
    abas.value.push(novaAba)
    abaAtivaId.value = novaAba.id
    return novaAba
  }

  const abrirArquivo = (caminho, titulo, conteudo = '') => {
    return adicionarAba(titulo, conteudo, 'texto', caminho)
  }

  const fecharAba = (id) => {
    const indice = abas.value.findIndex(aba => aba.id === id)
    if (indice === -1) return

    abas.value.splice(indice, 1)

    if (abaAtivaId.value === id) {
      if (abas.value.length > 0) {
        const novoIndice = Math.min(indice, abas.value.length - 1)
        abaAtivaId.value = abas.value[novoIndice].id
      } else {
        abaAtivaId.value = null
      }
    }
  }

  const ativarAba = (id) => {
    abaAtivaId.value = id
  }

  const obterAbaAtiva = () => {
    return abas.value.find(aba => aba.id === abaAtivaId.value)
  }

  const atualizarConteudo = (id, novoConteudo) => {
    const aba = abas.value.find(aba => aba.id === id)
    if (aba) {
      aba.conteudo = novoConteudo
    }
  }

  return {
    abas,
    abaAtivaId,
    adicionarAba,
    abrirArquivo,
    fecharAba,
    ativarAba,
    obterAbaAtiva,
    atualizarConteudo
  }
}
