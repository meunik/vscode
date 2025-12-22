<script setup>
import PainelLateral from '@/components/PainelLateral.vue'
import EditorAbas from '@/components/EditorAbas.vue'
import EditorConteudo from '@/components/EditorConteudo.vue'
import { useAbas } from '@/composables/useAbas'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'

const { abaAtiva, fecharAba } = useAbas()
const { abaAtivaId } = useEditorAbas()

const mostrarPainel = computed(() => abaAtiva.value !== null)
const larguraTela = ref(window.innerWidth)
const telaPequena = computed(() => larguraTela.value < 640)

const atualizarLargura = () => larguraTela.value = window.innerWidth

onMounted(() => window.addEventListener('resize', atualizarLargura))
onUnmounted(() => window.removeEventListener('resize', atualizarLargura))

watch(abaAtivaId, (novoId) => {
  if (novoId && telaPequena.value && mostrarPainel.value) fecharAba()
})
</script>

<template>
  <main class="flex flex-1 overflow-hidden bg-principal relative">
    <PainelLateral v-if="mostrarPainel" :class="telaPequena ? 'absolute inset-0 z-10' : ''" />
    <div class="flex flex-col flex-1 overflow-hidden">
      <EditorAbas />
      <EditorConteudo />
    </div>
  </main>
</template>
