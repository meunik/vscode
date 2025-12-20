<script setup>
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useGithubStore } from '@/stores/github'
import ItemArvore from './ItemArvore.vue'
import EditoresAbertos from './EditoresAbertos.vue'

const { estruturaArquivos, alternarPasta, recolherTodasPastas } = useArquivos()
const { abas, abrirArquivo, abaAtivaId } = useEditorAbas()
const githubStore = useGithubStore()

const handleAbrirArquivo = async (item) => {
  if (item.isGithubRepo) {
    const readme = await githubStore.buscarReadme(item.repoData)
    abrirArquivo(item.caminho, item.nome, readme, 'markdown', item.repoData)
  } else abrirArquivo(item.caminho, item.nome, item.conteudo || '')
}
</script>

<template>
  <div class="text-texto-principal text-[13px] h-full overflow-hidden flex flex-col">
    <EditoresAbertos />
    <div class="overflow-hidden">
      <div class="flex items-center justify-between px-2 py-2 pt-2 pb-0 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider group">
        <span>VSCODE2</span>
        <button 
          class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-texto-secundario cursor-pointer rounded hover:bg-hover hover:text-texto-principal transition-colors"
          @click="recolherTodasPastas"
          title="Recolher Pastas no Explorador"
        >
          <UIcon name="tabler:copy-minus" class="w-4 h-4 hidden group-hover:flex" />
        </button>
      </div>
      <div class="h-full overflow-auto sm-scrollbar">
        <ItemArvore
          v-for="item in estruturaArquivos"
          :key="item.id"
          :item="item"
          :nivel="0"
          :aba-ativa-id="abaAtivaId"
          :abas="abas"
          @alternarPasta="alternarPasta"
          @abrirArquivo="handleAbrirArquivo"
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
