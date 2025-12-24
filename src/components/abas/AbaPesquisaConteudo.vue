<script setup>
import { ref, computed } from 'vue'
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useGithubStore } from '@/stores/github'
import { usePesquisa } from '@/composables/usePesquisa'
import { obterIconeArquivo } from '@/utils/icones'
import Icon from '@/assets/icons/Icon.vue'
import serversData from '@/data/server.json'

const { encontrarItemPorCaminho, expandirCaminhoParaArquivo, estruturaArquivos } = useArquivos()
const { abrirArquivo } = useEditorAbas()
const githubStore = useGithubStore()
const { termoPesquisa } = usePesquisa()

const servers = ref(serversData)

// Função recursiva para coletar todos os arquivos da estrutura
const coletarArquivos = (items, lista = []) => {
  items.forEach(item => {
    if (item.tipo === 'arquivo') {
      lista.push(item)
    } else if (item.tipo === 'pasta' && item.filhos) {
      coletarArquivos(item.filhos, lista)
    }
  })
  return lista
}

// Busca nos arquivos
const arquivosFiltrados = computed(() => {
  if (!termoPesquisa.value) return []
  
  const termo = termoPesquisa.value.toLowerCase()
  const todosArquivos = coletarArquivos(estruturaArquivos.value)
  
  return todosArquivos
    .filter(arquivo => 
      arquivo.nome.toLowerCase().includes(termo) ||
      arquivo.caminho.toLowerCase().includes(termo)
    )
    .slice(0, 15)
})

// Busca nos servidores/aplicações
const serversFiltrados = computed(() => {
  if (!termoPesquisa.value) return []
  
  const termo = termoPesquisa.value.toLowerCase()
  
  return servers.value
    .filter(server => 
      server.nome.toLowerCase().includes(termo) ||
      server.hostname.toLowerCase().includes(termo) ||
      server.url.toLowerCase().includes(termo)
    )
    .slice(0, 10)
})

const totalResultados = computed(() => 
  arquivosFiltrados.value.length + serversFiltrados.value.length
)

const abrirArquivoEncontrado = async (arquivo) => {
  // Buscar o arquivo completo da estrutura para garantir todos os dados
  const arquivoCompleto = encontrarItemPorCaminho(arquivo.caminho) || arquivo
  let conteudo = arquivoCompleto.conteudo || ''
  
  if (arquivoCompleto.isGithubRepo && arquivoCompleto.repoData) {
    conteudo = await githubStore.buscarReadme(arquivoCompleto.repoData)
  }
  
  const metadados = {
    componente: arquivoCompleto.componente,
    componenteProps: arquivoCompleto.componenteProps,
    isGithubRepo: arquivoCompleto.isGithubRepo,
    repoData: arquivoCompleto.repoData,
    naoSalvarNoHistorico: arquivoCompleto.naoSalvarNoHistorico,
    icone: arquivoCompleto.icone || {
      tipo: 'uicon',
      valor: obterIconeArquivo(arquivoCompleto.nome)
    }
  }
  
  abrirArquivo(arquivoCompleto.caminho, arquivoCompleto.nome, conteudo, arquivoCompleto.tipoEditor || 'texto', metadados)
  expandirCaminhoParaArquivo(arquivoCompleto.caminho)
}
const abrirServerEncontrado = (server) => {
  const { adicionarAba } = useEditorAbas()
  
  adicionarAba(server.nome, '', 'iframe', server.url, { 
    url: server.url,
    icone: {
      tipo: 'img',
      valor: getIconeUrl(server.icone)
    }
  })
}

const getIconeUrl = (nomeIcone) => {
  if (!nomeIcone) return null
  return new URL(`../../assets/extensoes/${nomeIcone}`, import.meta.url).href
}

const obterTipoLabel = (tipo) => {
  if (tipo === 'componente') return 'Componente'
  if (tipo === 'markdown') return 'Markdown'
  return 'Arquivo'
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="p-2">
      <input
        v-model="termoPesquisa"
        type="text"
        placeholder="Pesquisar arquivos, aplicações..."
        class="w-full px-2 py-1 rounded-sm bg-input border border-input text-texto-principal text-[13px] outline-none focus:border-borda-destaque"
        autofocus
      />
    </div>
    
    <div class="flex-1 overflow-auto text-texto-principal text-[13px]">
      <div v-if="!termoPesquisa" class="p-3 text-texto-secundario text-center text-xs">
        Digite para pesquisar arquivos e aplicações
      </div>
      
      <div v-else-if="totalResultados === 0" class="p-3 text-texto-secundario text-center text-xs">
        Nenhum resultado encontrado para "{{ termoPesquisa }}"
      </div>
      
      <div v-else>
        <!-- Arquivos -->
        <div v-if="arquivosFiltrados.length > 0" class="mb-3">
          <div class="px-3 py-2 text-[10px] font-semibold text-texto-secundario uppercase tracking-wider">
            Arquivos ({{ arquivosFiltrados.length }})
          </div>
          <div
            v-for="arquivo in arquivosFiltrados"
            :key="arquivo.id"
            class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-hover group"
            @click="abrirArquivoEncontrado(arquivo)"
          >
            <UIcon :name="obterIconeArquivo(arquivo.nome)" class="text-[16px] shrink-0" />
            <div class="flex-1 min-w-0">
              <div class="font-medium truncate">{{ arquivo.nome }}</div>
              <div class="text-[11px] text-texto-secundario truncate">{{ arquivo.caminho }}</div>
            </div>
            <div class="text-[10px] text-texto-secundario opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {{ obterTipoLabel(arquivo.tipoEditor) }}
            </div>
          </div>
        </div>

        <!-- Aplicações/Servidores -->
        <div v-if="serversFiltrados.length > 0">
          <div class="px-3 py-2 text-[10px] font-semibold text-texto-secundario uppercase tracking-wider">
            Aplicações ({{ serversFiltrados.length }})
          </div>
          <div
            v-for="server in serversFiltrados"
            :key="server.id"
            class="flex items-center gap-2 px-3 py-1.5 cursor-pointer hover:bg-hover group"
            @click="abrirServerEncontrado(server)"
          >
            <div v-if="server.icone" class="w-4 h-4 shrink-0 flex items-center justify-center">
              <img :src="getIconeUrl(server.icone)" :alt="server.nome" class="w-full h-full object-contain" />
            </div>
            <div v-else class="w-4 h-4 shrink-0"></div>
            <div class="flex-1 min-w-0">
              <div class="font-medium truncate">{{ server.nome }}</div>
              <div class="text-[11px] text-texto-secundario truncate">{{ server.url }}</div>
            </div>
            <div class="text-[10px] text-texto-secundario opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Aplicação
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
