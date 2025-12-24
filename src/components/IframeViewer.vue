<script setup>
import { ref, computed } from 'vue'
import { useTemas } from '@/composables/useTemas'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  passarTema: {
    type: Boolean,
    default: false
  }
})

const { temaAtual, temas } = useTemas()
const carregando = ref(true)

const tipoTema = computed(() => {
  const tema = temas.find(t => t.id === temaAtual.value)
  return tema?.tipo === 'claro' ? 'light' : 'dark'
})

const urlIframe = computed(() => {
  if (!props.passarTema) return props.url
  
  const separador = props.url.includes('?') ? '&' : '?'
  return `${props.url}${separador}theme=${tipoTema.value}`
})

const handleLoad = () => carregando.value = false
</script>

<template>
  <div class="relative w-full h-full">
    <div v-if="carregando" class="absolute inset-0 flex items-center justify-center bg-editor-bg">
      <div class="flex flex-col items-center gap-4">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-icone-ativo"></div>
        <span class="text-texto-secundario">Carregando...</span>
      </div>
    </div>
    <iframe :src="urlIframe" frameborder="0" class="w-full h-full" @load="handleLoad" />
  </div>
</template>
