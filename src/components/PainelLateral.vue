<script setup>
import { useAbas } from '@/composables/useAbas'
import { useRedimensionar } from '@/composables/useRedimensionar'
import { computed } from 'vue'

import AbaExploradorConteudo from './abas/AbaExploradorConteudo.vue'
import AbaPesquisaConteudo from './abas/AbaPesquisaConteudo.vue'
import AbaGitConteudo from './abas/AbaGitConteudo.vue'
import AbaExtensoesConteudo from './abas/AbaExtensoesConteudo.vue'
import AbaCameraConteudo from './abas/AbaCameraConteudo.vue'

const { abaAtiva } = useAbas()
const { largura, iniciarRedimensionamento } = useRedimensionar(250, 180, 600)

const componenteAtual = computed(() => {
  const mapa = {
    explorador: AbaExploradorConteudo,
    pesquisa: AbaPesquisaConteudo,
    git: AbaGitConteudo,
    extensoes: AbaExtensoesConteudo,
    camera: AbaCameraConteudo
  }
  return abaAtiva.value ? mapa[abaAtiva.value] : null
})

const tituloAba = computed(() => {
  const titulos = {
    explorador: 'EXPLORADOR',
    pesquisa: 'PESQUISA',
    git: 'CONTROLE DE CÓDIGO-FONTE',
    extensoes: 'EXTENSÕES',
    camera: 'CÂMERA'
  }
  return abaAtiva.value ? titulos[abaAtiva.value] : ''
})
</script>

<template>
  <div v-if="abaAtiva" class="relative h-full bg-secundario border-r border-borda-principal flex flex-col" :style="{ width: largura + 'px' }">
    <div class="px-5 h-8.75 py-2 bg-secundario border-b border-borda-principal text-texto-principal text-[11px] font-semibold tracking-wider flex items-center">
      <h3 class="m-0 text-[11px] uppercase">{{ tituloAba }}</h3>
    </div>
    <div class="flex-1 overflow-y-auto overflow-x-hidden">
      <component :is="componenteAtual" />
    </div>
    <div class="absolute top-0 right-0 w-1 h-full cursor-ew-resize z-10 hover:bg-borda-destaque" @mousedown="iniciarRedimensionamento"></div>
  </div>
</template>
