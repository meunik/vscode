<script setup>
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useGithubStore } from '@/stores/github'
import { obterIconeArquivo } from '@/utils/icones'
import ItemArvore from './ItemArvore.vue'

const { estruturaArquivos, alternarPasta, recolherTodasPastas } = useArquivos()
const { abas, abrirArquivo, ativarAba, fecharAba, abaAtivaId, fecharTodasAbas } = useEditorAbas()
const githubStore = useGithubStore()

const handleAbrirArquivo = async (item) => {
  if (item.isGithubRepo) {
    const readme = await githubStore.buscarReadme(item.repoData)
    abrirArquivo(item.caminho, item.nome, readme, 'markdown', item.repoData)
  } else abrirArquivo(item.caminho, item.nome, item.conteudo || '')
}

const handleFecharAba = (aba) => fecharAba(aba.id)
const handleAtivarAba = (aba) => ativarAba(aba.id)
</script>

<template>
  <div class="text-texto-principal text-[13px] h-full overflow-y-auto">
    <div v-if="abas.length > 0" class="mb-2">
      <div class="flex items-center justify-between px-2 py-2 pt-2 pb-0 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider group">
        <span>EDITORES ABERTOS</span>
        <button 
          class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-texto-secundario cursor-pointer rounded hover:bg-hover hover:text-texto-principal transition-colors"
          @click="fecharTodasAbas"
          title="Fechar Todos os Editores"
        >
          <UIcon name="material-symbols:tab-close-outline-rounded" class="w-4 h-4 hidden group-hover:flex" />
        </button>
      </div>
      <div class="py-0">
        <div
          v-for="aba in abas"
          :key="aba.id"
          class="flex items-center gap-1 pl-3 pr-1 py-0.5 cursor-pointer select-none group"
          :class="[abaAtivaId === aba.id ? 'bg-ativo' : 'hover:bg-hover']"
          @click="handleAtivarAba(aba)"
        >
          <UIcon :name="obterIconeArquivo(aba.titulo)" class="text-[16px] shrink-0" />
          <span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">{{ aba.titulo }}</span>
          <button class="items-center justify-center w-4.5 h-4.5 bg-transparent border-none text-texto-secundario text-lg cursor-pointer rounded p-0 leading-none hidden hover:bg-hover hover:text-texto-principal group-hover:flex" @click.stop="handleFecharAba(aba)">
            <UIcon name="lucide-x" class="w-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
    <div>
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
      <div>
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
