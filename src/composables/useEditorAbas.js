import { ref } from 'vue'

const abas = ref([])
const abaAtivaId = ref(null)
const historicoRecente = ref([])

let proximoId = 1

const carregarHistorico = () => {
  try {
    const salvos = localStorage.getItem('historico-abas-recentes')
    if (salvos) historicoRecente.value = JSON.parse(salvos)
  } catch (e) {
    console.error('Erro ao carregar histórico:', e)
  }
}

// Salva histórico no localStorage
const salvarHistorico = () => {
  try {
    localStorage.setItem('historico-abas-recentes', JSON.stringify(historicoRecente.value))
  } catch (e) {
    console.error('Erro ao salvar histórico:', e)
  }
}

const adicionarAoHistorico = (aba) => {
  if (aba.tipoEditor === 'componente' || !aba.caminho) return
  historicoRecente.value = historicoRecente.value.filter(item => item.caminho !== aba.caminho)

  historicoRecente.value.unshift({
    caminho: aba.caminho,
    titulo: aba.titulo,
    tipoEditor: aba.tipoEditor,
    timestamp: Date.now()
  })
  
  // Mantém apenas os 10 mais recentes
  if (historicoRecente.value.length > 10) historicoRecente.value = historicoRecente.value.slice(0, 10)
  
  salvarHistorico()
}

carregarHistorico()

export function useEditorAbas() {
  const adicionarAba = (titulo, conteudo = '', tipoEditor = 'texto', caminho = null, metadados = null) => {
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
      tipoEditor,
      caminho,
      metadados,
      ...(metadados || {})
    }
    abas.value.push(novaAba)
    abaAtivaId.value = novaAba.id
    adicionarAoHistorico(novaAba)
    
    return novaAba
  }

  const abrirArquivo = (caminho, titulo, conteudo = '', tipoEditor = 'texto', metadados = null) => {
    return adicionarAba(titulo, conteudo, tipoEditor, caminho, metadados)
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

  const ativarAba = (id) => { abaAtivaId.value = id }
  const obterAbaAtiva = () => abas.value.find(aba => aba.id === abaAtivaId.value)
  const atualizarConteudo = (id, novoConteudo) => {
    const aba = abas.value.find(aba => aba.id === id)
    if (aba) aba.conteudo = novoConteudo
  }

  const fecharTodasAbas = () => {
    abas.value = []
    abaAtivaId.value = null
  }
  
  return {
    abas,
    abaAtivaId,
    historicoRecente,
    adicionarAba,
    abrirArquivo,
    fecharAba,
    ativarAba,
    obterAbaAtiva,
    atualizarConteudo,
    fecharTodasAbas
  }
}
