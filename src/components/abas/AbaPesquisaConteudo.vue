<script setup>
import { ref } from 'vue'

const termoPesquisa = ref('')
const resultados = ref([])

const pesquisar = () => {
  if (!termoPesquisa.value) {
    resultados.value = []
    return
  }
  resultados.value = [
    { arquivo: 'Main.vue', linha: 12, texto: 'const ' + termoPesquisa.value },
    { arquivo: 'App.vue', linha: 5, texto: 'import ' + termoPesquisa.value }
  ]
}
</script>

<template>
  <div>
    <div class="p-2">
      <input
        v-model="termoPesquisa"
        @input="pesquisar"
        type="text"
        placeholder="Pesquisar"
        class="w-full px-2 py-1 rounded-sm bg-input border border-input text-texto-principal text-[13px] outline-none focus:border-borda-destaque"
      />
    </div>
    <div class="text-texto-principal text-[13px]">
      <div v-if="resultados.length === 0" class="p-3 text-texto-secundario text-center">
        {{ termoPesquisa ? 'Nenhum resultado encontrado' : 'Digite para pesquisar' }}
      </div>
      <div v-for="(resultado, indice) in resultados" :key="indice" class="px-3 pb-2 pt-0.5 cursor-pointer hover:bg-hover">
        <div class="font-medium mb-1">{{ resultado.arquivo }}</div>
        <div class="pl-3 text-texto-secundario text-xs">
          <span class="text-texto-secundario mr-2">{{ resultado.linha }}:</span>
          <span class="text-texto-principal">{{ resultado.texto }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
