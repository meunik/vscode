<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTemas } from '@/composables/useTemas'
import SeletorTemas from './SeletorTemas.vue'

const props = defineProps({
  aberto: Boolean
})

const emit = defineEmits(['fechar'])

const { selecionarTema, preferenciaTema } = useTemas()
const mostrarSeletorTemas = ref(false)

const opcoes = [
  { id: 'dark', nome: 'Escuro', icone: '🌙' },
  { id: 'light', nome: 'Claro', icone: '☀️' },
  { id: 'sistema', nome: 'Sistema', icone: '💻' },
  { id: 'temas', nome: 'Temas', icone: '🎨' }
]

const selecionarOpcao = (opcao) => {
  if (opcao.id === 'temas') {
    mostrarSeletorTemas.value = true
  } else {
    selecionarTema(opcao.id)
    emit('fechar')
  }
}

const fecharSeletor = () => {
  mostrarSeletorTemas.value = false
  emit('fechar')
}

const handleClickFora = (evento) => {
  if (!evento.target.closest('.menu-configuracoes') && !evento.target.closest('.botao-configuracoes')) {
    emit('fechar')
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickFora)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickFora)
})
</script>

<template>
  <div v-if="aberto" class="menu-configuracoes absolute bottom-13 left-1 bg-terciario border border-borda-secundaria rounded-md min-w-50 z-1000 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
    <div
      v-for="opcao in opcoes"
      :key="opcao.id"
      class="flex items-center gap-3 px-3 py-2 cursor-pointer text-texto-principal text-[13px] transition-colors hover:bg-hover"
      @click="selecionarOpcao(opcao)"
      :title="opcao.nome"
    >
      <span class="text-base w-5 text-center shrink-0">{{ opcao.icone }}</span>
      <span class="flex-1">{{ opcao.nome }}</span>
      <span v-if="preferenciaTema === opcao.id" class="text-borda-destaque font-bold text-sm">✓</span>
    </div>
  </div>
  <SeletorTemas v-if="mostrarSeletorTemas" @fechar="fecharSeletor" />
</template>

<style scoped>
</style>
