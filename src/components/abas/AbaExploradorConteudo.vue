<script setup>
import { useArquivos } from '@/composables/useArquivos'
import { useEditorAbas } from '@/composables/useEditorAbas'
import ItemArvore from './ItemArvore.vue'

const { estruturaArquivos, alternarPasta } = useArquivos()
const { abas, abrirArquivo, ativarAba, fecharAba } = useEditorAbas()

const handleAbrirArquivo = (item) => {
  abrirArquivo(item.caminho, item.nome, item.conteudo || '')
}

const handleFecharAba = (aba) => {
  fecharAba(aba.id)
}

const handleAtivarAba = (aba) => {
  ativarAba(aba.id)
}
</script>

<template>
  <div class="text-texto-principal text-[13px] h-full overflow-y-auto">
    <div v-if="abas.length > 0" class="mb-2">
      <div class="px-2 py-2 pt-2 pb-1 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider">EDITORES ABERTOS</div>
      <div class="py-1">
        <div
          v-for="aba in abas"
          :key="aba.id"
          class="flex items-center gap-2 px-5 py-1 cursor-pointer select-none hover:bg-hover"
          @click="handleAtivarAba(aba)"
        >
          <span class="text-xs shrink-0">📄</span>
          <span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">{{ aba.titulo }}</span>
          <button class="flex items-center justify-center w-4.5 h-4.5 bg-transparent border-none text-texto-secundario text-lg cursor-pointer rounded p-0 leading-none opacity-0 transition-opacity hover:bg-hover hover:text-texto-principal group-hover:opacity-100" @click.stop="handleFecharAba(aba)">
            ×
          </button>
        </div>
      </div>
    </div>
    <div class="mb-2">
      <div class="px-2 py-2 pt-2 pb-1 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider">VSCODE2</div>
      <div class="mt-1">
        <ItemArvore
          v-for="item in estruturaArquivos"
          :key="item.id"
          :item="item"
          :nivel="0"
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
