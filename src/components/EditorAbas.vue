<script setup>
import { useEditorAbas } from '@/composables/useEditorAbas'

const { abas, abaAtivaId, ativarAba, fecharAba } = useEditorAbas()

const fecharAbaComEvento = (evento, id) => {
  evento.stopPropagation()
  fecharAba(id)
}
</script>

<template>
  <div class="flex h-8.75 bg-secundario border-b border-borda-principal overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-0">
    <div v-if="abas.length === 0" class="flex items-center px-4 text-texto-secundario text-[13px]">
      Nenhum arquivo aberto
    </div>
    <div v-else class="flex flex-1">
      <div
        v-for="aba in abas"
        :key="aba.id"
        class="flex items-center gap-2 px-3 border-r border-borda-principal text-[13px] cursor-pointer select-none min-w-30 max-w-50 transition-colors"
        :class="[
          aba.id === abaAtivaId 
            ? 'bg-aba-bg-ativa text-aba-texto-ativo border-t border-t-aba-borda-ativa' 
            : 'bg-aba-bg text-aba-texto hover:bg-hover'
        ]"
        @click="ativarAba(aba.id)"
      >
        <span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{{ aba.titulo }}</span>
        <button 
          class="flex items-center justify-center w-5 h-5 bg-transparent border-none text-icone-normal text-xl cursor-pointer rounded p-0 leading-none hover:bg-hover hover:text-icone-hover"
          @click="fecharAbaComEvento($event, aba.id)"
        >
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style
