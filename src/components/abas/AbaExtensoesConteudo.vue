<script setup>
import { ref } from 'vue'

const extensoes = ref([
  {
    nome: 'Vue Language Features',
    autor: 'Vue',
    descricao: 'Suporte oficial do Vue para VS Code',
    instalada: true
  },
  {
    nome: 'ESLint',
    autor: 'Microsoft',
    descricao: 'Integração do ESLint',
    instalada: true
  },
  {
    nome: 'Prettier',
    autor: 'Prettier',
    descricao: 'Formatador de código',
    instalada: false
  }
])

const alternarInstalacao = (indice) => {
  extensoes.value[indice].instalada = !extensoes.value[indice].instalada
}
</script>

<template>
  <div class="p-3 text-texto-principal">
    <div class="mb-4">
      <input type="text" placeholder="Pesquisar extensões" class="w-full px-3 py-2 bg-input border border-input text-texto-principal text-[13px] outline-none focus:border-borda-destaque" />
    </div>
    <div class="flex flex-col gap-3">
      <div v-for="(ext, indice) in extensoes" :key="indice" class="p-3 bg-terciario rounded flex justify-between items-start gap-3">
        <div class="flex-1">
          <div class="font-semibold text-sm mb-1 text-texto-titulo">{{ ext.nome }}</div>
          <div class="text-xs text-texto-secundario mb-1.5">{{ ext.autor }}</div>
          <div class="text-xs text-texto-principal leading-relaxed">{{ ext.descricao }}</div>
        </div>
        <button @click="alternarInstalacao(indice)" class="px-4 py-1.5 bg-botao border-none text-white text-xs font-medium cursor-pointer rounded-sm whitespace-nowrap transition-colors hover:bg-botao-hover">
          {{ ext.instalada ? 'Desinstalar' : 'Instalar' }}
        </button>
      </div>
    </div>
  </div>
</template>
