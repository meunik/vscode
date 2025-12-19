<script setup>
import PainelLateral from './PainelLateral.vue'
import EditorAbas from './EditorAbas.vue'
import EditorConteudo from './EditorConteudo.vue'
import { useAbas } from '@/composables/useAbas'
import { computed } from 'vue'

const { abaAtiva } = useAbas()

const mostrarPainel = computed(() => abaAtiva.value !== null)
</script>

<template>
  <main class="main-container">
    <PainelLateral v-if="mostrarPainel" />
    <div class="area-editor">
      <EditorAbas />
      <EditorConteudo />
    </div>
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex: 1;
  overflow: hidden;
  background-color: #1e1e1e;
}

.area-editor {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}
</style>
