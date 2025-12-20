<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue'
import { useTemas } from '@/composables/useTemas'

const props = defineProps({
  aberto: Boolean
})

const emit = defineEmits(['fechar', 'abrir-seletor-temas'])

const { selecionarTema, preferenciaTema } = useTemas()

const opcoes = [
  { id: 'dark', nome: 'Escuro', icone: 'line-md:sunny-filled-loop-to-moon-filled-loop-transition' },
  { id: 'light', nome: 'Claro', icone: 'line-md:sun-rising-twotone-loop' },
  { id: 'sistema', nome: 'Sistema', icone: 'line-md:computer-twotone' },
  { id: 'temas', nome: 'Temas', icone: 'line-md:paint-drop-half-twotone' }
]

const selecionarOpcao = async (opcao) => {
  if (opcao.id === 'temas') {
    emit('abrir-seletor-temas')
    await nextTick()
  } else {
    selecionarTema(opcao.id)
  }
  emit('fechar')
}

const handleClickFora = (evento) => {
  if (!evento.target.closest('.menu-configuracoes') && !evento.target.closest('.botao-configuracoes')) {
    emit('fechar')
  }
}

onMounted(() => document.addEventListener('click', handleClickFora))
onUnmounted(() => document.removeEventListener('click', handleClickFora))
</script>

<template>
  <div v-if="aberto" class="menu-configuracoes absolute bottom-13 left-1 bg-terciario border border-borda-secundaria rounded-md min-w-50 z-20 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
    <div
      v-for="opcao in opcoes"
      :key="opcao.id"
      class="flex items-center gap-3 px-3 py-2 cursor-pointer text-texto-principal text-[13px] transition-colors hover:bg-hover"
      @click.stop="selecionarOpcao(opcao)"
      :title="opcao.nome"
    >
      <UIcon :name="opcao.icone" class="text-base w-5 text-center shrink-0" />
      <span class="flex-1">{{ opcao.nome }}</span>
      <span v-if="preferenciaTema === opcao.id" class="text-borda-destaque font-bold text-sm">✓</span>
    </div>
  </div>
</template>
