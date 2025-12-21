<script setup>
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useGithubStore } from '@/stores/github'
import ItemArvore from '@/components/abas/ItemArvore.vue'
import EditoresAbertos from '@/components/abas/EditoresAbertos.vue'

const { estruturaArquivos, itemSelecionado, alternarPasta, selecionarItem, criarNovoArquivo, criarNovaPasta, recolherTodasPastas } = useArquivos()
const { abas, abrirArquivo, abaAtivaId } = useEditorAbas()
const githubStore = useGithubStore()

const handleAbrirArquivo = async (item) => {
  if (item.isGithubRepo) {
    const readme = await githubStore.buscarReadme(item.repoData)
    abrirArquivo(item.caminho, item.nome, readme, 'markdown', item.repoData)
  } else if (item.caminho === 'Profissional/Curriculo.md') {
    abrirArquivo(item.caminho, item.nome, item.conteudo || '', 'curriculo-visualizacao')
  } else abrirArquivo(item.caminho, item.nome, item.conteudo || '')
}

const handleNovoArquivo = () => {
  const arquivo = criarNovoArquivo()
  if (arquivo) {
    abrirArquivo(arquivo.caminho, arquivo.nome, arquivo.conteudo || '')
  }
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
      <div class="h-full overflow-auto sm-scrollbar pb-5">
        <ItemArvore
          v-for="item in estruturaArquivos"
          :key="item.id"
          :item="item"
          :nivel="0"
          :aba-ativa-id="abaAtivaId"
          :abas="abas"
          :item-selecionado="itemSelecionado"
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
