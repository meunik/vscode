<script setup>
import { computed } from 'vue'
import { useEditorAbas } from '@/composables/useEditorAbas'
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import EditorCurriculoConteudo from '@/components/curriculo/editor/EditorCurriculoConteudo.vue'
import Curriculo from '@/components/curriculo/Curriculo.vue'
import BemVindo from '@/components/bemVindo/BemVindo.vue'

const { abas, abaAtivaId } = useEditorAbas()

const abaAtual = computed(() => {
  return abas.value.find(aba => aba.id === abaAtivaId.value)
})
</script>

<template>
  <div class="flex-1 flex flex-col bg-principal overflow-hidden">
    <div v-if="!abaAtual" class="flex items-center justify-center w-full h-full text-texto-secundario">
      <div class="text-center">
        <h2 class="text-2xl font-normal m-0 mb-3 text-texto-principal">Bem-vindo ao site do Marcos</h2>
        <p class="text-sm m-0">Abra um arquivo para começar a editar</p>
      </div>
    </div>
    <div v-else class="flex flex-col h-full">
      <div class="px-4 pt-2 pb-0.5 bg-principal border-b border-borda-secundaria text-texto-principal text-xs">
        <span class="font-mono">{{ abaAtual.caminho || abaAtual.titulo }}</span>
      </div>
      <div class="flex-1" :class="abaAtual.tipo === 'markdown' || abaAtual.tipo === 'curriculo' || abaAtual.tipo === 'curriculo-visualizacao' || abaAtual.tipo === 'componente' ? 'overflow-auto' : 'overflow-hidden'">
        <EditorCurriculoConteudo v-if="abaAtual.tipo === 'curriculo'" />
        <Curriculo v-else-if="abaAtual.tipo === 'curriculo-visualizacao'" />
        <BemVindo v-else-if="abaAtual.tipo === 'componente' && abaAtual.componente === 'BemVindo'" />
        <MarkdownViewer v-else-if="abaAtual.tipo === 'markdown'" :conteudo="abaAtual.conteudo" />
        <textarea
          v-else
          v-model="abaAtual.conteudo"
          class="w-full h-full p-4 bg-principal border-none text-texto-principal font-mono text-sm leading-relaxed resize-none outline-none overflow-auto placeholder:text-texto-secundario"
          placeholder="Digite seu código aqui..."
          spellcheck="false"
        ></textarea>
      </div>
    </div>
  </div>
</template>
