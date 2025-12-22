<script setup>
import { watch } from 'vue'
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useGithubStore } from '@/stores/github'
import ItemArvore from '@/components/abas/ItemArvore.vue'
import EditoresAbertos from '@/components/abas/EditoresAbertos.vue'

const { estruturaArquivos, itemSelecionado, ocultarArquivoAtivo, alternarPasta, selecionarItem, desselecionarItem, expandirCaminhoParaArquivo, criarNovoArquivo, criarNovaPasta, recolherTodasPastas } = useArquivos()
const { abas, abrirArquivo, abaAtivaId } = useEditorAbas()
const githubStore = useGithubStore()

watch(abaAtivaId, () => {
  // Encontra a aba ativa e expande o caminho até o arquivo
  const abaAtiva = abas.value.find(aba => aba.id === abaAtivaId.value)
  if (abaAtiva && abaAtiva.caminho) expandirCaminhoParaArquivo(abaAtiva.caminho)
})

const handleAbrirArquivo = async (item) => {
  desselecionarItem()
  ocultarArquivoAtivo.value = false
  
  let conteudo = item.conteudo || ''
  
  if (item.isGithubRepo && item.repoData) {
    conteudo = await githubStore.buscarReadme(item.repoData)
  }
  
  const metadados = {
    componente: item.componente,
    componenteProps: item.componenteProps,
    isGithubRepo: item.isGithubRepo,
    repoData: item.repoData,
    naoSalvarNoHistorico: item.naoSalvarNoHistorico
  }
  
  abrirArquivo(item.caminho, item.nome, conteudo, item.tipoEditor || 'texto', metadados)
}

const handleNovoArquivo = () => {
  const arquivo = criarNovoArquivo()
  if (arquivo) abrirArquivo(arquivo.caminho, arquivo.nome, arquivo.conteudo || '')
}

const handleNovaPasta = () => {
  criarNovaPasta()
}
</script>

<template>
  <div class="text-texto-principal text-[13px] h-full overflow-hidden flex flex-col">
    <EditoresAbertos />
    <div class="h-full overflow-hidden flex flex-col">
      <div class="flex items-center justify-between px-2 py-2 pt-2 pb-0 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider group">
        <span>DIRETÓRIO</span>
        <div class="flex items-center gap-1">
          <button 
            class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-texto-secundario cursor-pointer rounded hover:bg-hover hover:text-texto-principal transition-colors"
            @click="handleNovoArquivo"
            title="Novo Arquivo..."
          >
            <UIcon name="line-md:document-add" class="w-4 h-4" />
          </button>
          <button 
            class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-texto-secundario cursor-pointer rounded hover:bg-hover hover:text-texto-principal transition-colors"
            @click="handleNovaPasta"
            title="Nova Pasta..."
          >
            <UIcon name="line-md:folder-plus" class="w-4 h-4" />
          </button>
          <button 
            class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-texto-secundario cursor-pointer rounded hover:bg-hover hover:text-texto-principal transition-colors"
            @click="recolherTodasPastas"
            title="Recolher Pastas no Explorador"
          >
            <UIcon name="tabler:copy-minus" class="w-4 h-4" />
          </button>
        </div>
      </div>
      <div class="h-full overflow-auto sm-scrollbar pb-5" @click="desselecionarItem">
        <ItemArvore
          v-for="item in estruturaArquivos"
          :key="item.id"
          :item="item"
          :nivel="0"
          :aba-ativa-id="abaAtivaId"
          :abas="abas"
          :item-selecionado="itemSelecionado"
          :ocultar-arquivo-ativo="ocultarArquivoAtivo"
          @alternarPasta="alternarPasta"
          @abrirArquivo="handleAbrirArquivo"
          @selecionarItem="selecionarItem"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex:has(button):hover button {
  opacity: 1;
}
</style>
