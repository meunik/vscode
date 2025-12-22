<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useGithubStore } from '@/stores/github'
import MarkdownViewer from '@/components/MarkdownViewer.vue'

const { abas, abaAtivaId } = useEditorAbas()
const githubStore = useGithubStore()

const componentes = import.meta.glob('@/components/**/*.vue')

const abaAtual = computed(() => {
  return abas.value.find(aba => aba.id === abaAtivaId.value)
})

const componenteDinamico = computed(() => {
  if (!abaAtual.value || !abaAtual.value.componente) return null
  
  const caminhoCompleto = `/src/components/${abaAtual.value.componente}.vue`
  const componenteLoader = componentes[caminhoCompleto]
  
  if (!componenteLoader) {
    console.error(`Componente não encontrado: ${caminhoCompleto}`)
    return null
  }
  
  return defineAsyncComponent(componenteLoader)
})

const estaCarregandoConteudo = computed(() => {
  if (!abaAtual.value || !abaAtual.value.isGithubRepo || !abaAtual.value.repoData) return false
  const chave = `${abaAtual.value.repoData.owner.login}/${abaAtual.value.repoData.name}`
  return githubStore.carregandoReadme[chave] || false
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
      <div class="flex-1" :class="['markdown', 'componente'].includes(abaAtual.tipoEditor) ? 'overflow-auto' : 'overflow-hidden'">
        <div v-if="estaCarregandoConteudo" class="flex items-center justify-center h-full">
          <div class="flex flex-col items-center gap-2 text-texto-secundario">
            <UIcon name="line-md:loading-twotone-loop" class="text-[32px]" />
            <span class="text-sm">Carregando conteúdo...</span>
          </div>
        </div>
        <component 
          v-else-if="componenteDinamico" 
          :is="componenteDinamico"
          v-bind="abaAtual.componenteProps || {}"
        />
        <MarkdownViewer v-else-if="abaAtual.tipoEditor === 'markdown'" :conteudo="abaAtual.conteudo" />
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
