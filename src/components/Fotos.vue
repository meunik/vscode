<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTemas } from '@/composables/useTemas'

const { temaAtual, temas } = useTemas()
const carregando = ref(true)

const tipoTema = computed(() => {
  const tema = temas.find(t => t.id === temaAtual.value)
  return tema?.tipo === 'claro' ? 'light' : 'dark'
})

const urlIframe = computed(() => {
  return `https://fotos.marcospaulo.dev/s/fotos?theme=${tipoTema.value}`
})

const handleLoad = () => carregando.value = false
</script>

<template>
  <div class="relative w-full h-full">
    <div 
      v-if="carregando" 
      class="absolute inset-0 flex items-center justify-center bg-editor-bg"
    >
      <div class="flex flex-col items-center gap-4">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-icone-ativo"></div>
        <span class="text-texto-secundario">Carregando fotos...</span>
      </div>
    </div>
    <iframe
      :src="urlIframe"
      frameborder="0"
      class="w-full h-full"
      @load="handleLoad"
    />
  </div>
</template>