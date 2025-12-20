<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useTemas } from '@/composables/useTemas'

const emit = defineEmits(['fechar'])

const { temas, selecionarTema, temaAtual } = useTemas()

const selecionarTemaEspecifico = (tema) => {
  selecionarTema(tema.id)
  emit('fechar')
}

const handleClickFora = (evento) => {
  if (!evento.target.closest('.seletor-temas')) {
    emit('fechar')
  }
}

const handleEscape = (evento) => {
  if (evento.key === 'Escape') {
    emit('fechar')
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickFora)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickFora)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-start justify-center pt-15 z-2000">
    <div class="bg-secundario border border-borda-secundaria rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.4)] w-125 max-w-[90vw] max-h-[70vh] overflow-hidden flex flex-col">
      <div class="flex items-center justify-between px-4 py-3 border-b border-borda-secundaria">
        <h3 class="m-0 text-sm font-semibold text-texto-titulo">Selecionar Tema de Cores</h3>
        <button 
          class="bg-transparent border-none text-icone-normal text-2xl cursor-pointer p-0 w-6 h-6 flex items-center justify-center rounded transition-all hover:bg-hover hover:text-icone-hover"
          @click="emit('fechar')"
        >
          ×
        </button>
      </div>
      <div class="overflow-y-auto p-2">
        <div
          v-for="tema in temas"
          :key="tema.id"
          :class="[
            'flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded mb-1 transition-colors hover:bg-hover',
            temaAtual === tema.id ? 'bg-ativo' : ''
          ]"
          @click="selecionarTemaEspecifico(tema)"
        >
          <div :class="['w-10 h-8 rounded border border-borda-secundaria p-1.5 flex flex-col gap-0.5 shrink-0', tema.id]">
            <div class="h-0.5 bg-borda-destaque rounded-sm"></div>
            <div class="h-0.5 bg-borda-destaque rounded-sm w-3/5"></div>
            <div class="h-0.5 bg-borda-destaque rounded-sm"></div>
          </div>
          <div class="flex-1">
            <div class="text-[13px] font-medium text-texto-principal mb-0.5">{{ tema.nome }}</div>
            <div class="text-[11px] text-texto-secundario">{{ tema.tipo === 'escuro' ? 'Escuro' : 'Claro' }}</div>
          </div>
          <span v-if="temaAtual === tema.id" class="text-borda-destaque font-bold text-base">✓</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dark {
  background-color: #1e1e1e;
}

.light {
  background-color: #ffffff;
}

.monokai {
  background-color: #272822;
}

.dracula {
  background-color: #282a36;
}

.solarized {
  background-color: #fdf6e3;
}
</style>
