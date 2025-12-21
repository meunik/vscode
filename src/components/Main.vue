<script setup>
import PainelLateral from '@/components/PainelLateral.vue'
import EditorAbas from '@/components/EditorAbas.vue'
import EditorConteudo from '@/components/EditorConteudo.vue'
import { useAbas } from '@/composables/useAbas'
import { computed } from 'vue'

const { abaAtiva } = useAbas()

const mostrarPainel = computed(() => abaAtiva.value !== null)
</script>

<template>
  <main class="flex flex-1 overflow-hidden bg-principal">
    <PainelLateral v-if="mostrarPainel" />
    <div class="flex flex-col flex-1 overflow-hidden">
      <EditorAbas />
      <EditorConteudo />
    </div>
  </main>
</template>
