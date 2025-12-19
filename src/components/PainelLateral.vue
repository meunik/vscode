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
  <div v-if="abaAtiva" class="painel-lateral" :style="{ width: largura + 'px' }">
    <div class="painel-cabecalho">
      <h3>{{ tituloAba }}</h3>
    </div>
    <div class="painel-conteudo">
      <component :is="componenteAtual" />
    </div>
    <div class="redimensionador" @mousedown="iniciarRedimensionamento"></div>
  </div>
</template>

<style scoped>
.painel-lateral {
  position: relative;
  height: 100%;
  background-color: #252526;
  border-right: 1px solid #1e1e1e;
  display: flex;
  flex-direction: column;
}

.painel-cabecalho {
  padding: 8px 20px;
  background-color: #252526;
  border-bottom: 1px solid #1e1e1e;
  color: #cccccc;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.painel-cabecalho h3 {
  margin: 0;
  font-size: 11px;
  text-transform: uppercase;
}

.painel-conteudo {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.redimensionador {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  cursor: ew-resize;
  z-index: 10;
}

.redimensionador:hover {
  background-color: #007acc;
}
</style>
