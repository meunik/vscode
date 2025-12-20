<script setup>
import { ref } from 'vue'

const alteracoes = ref([
  { tipo: 'M', arquivo: 'src/components/Main.vue' },
  { tipo: 'A', arquivo: 'src/components/PainelLateral.vue' },
  { tipo: 'M', arquivo: 'src/composables/useAbas.js' }
])

const mensagemCommit = ref('')

const commit = () => {
  if (mensagemCommit.value.trim()) {
    alteracoes.value = []
    mensagemCommit.value = ''
  }
}
</script>

<template>
  <div class="p-3 text-texto-principal">
    <div class="mb-5">
      <textarea
        v-model="mensagemCommit"
        placeholder="Mensagem do commit"
        class="w-full px-3 py-2 bg-input border border-input text-texto-principal text-[13px] font-sans resize-y outline-none mb-2 focus:border-borda-destaque"
        rows="3"
      ></textarea>
      <button @click="commit" class="w-full px-3 py-2 bg-botao border-none text-white text-[13px] font-medium cursor-pointer transition-colors hover:bg-botao-hover disabled:bg-input disabled:text-texto-secundario disabled:cursor-not-allowed" :disabled="!mensagemCommit.trim()">
        Confirmar
      </button>
    </div>
    <div class="mt-4">
      <div class="text-[11px] font-semibold text-texto-secundario mb-2 uppercase tracking-wider">ALTERAÇÕES</div>
      <div v-if="alteracoes.length === 0" class="p-3 text-texto-secundario text-[13px] text-center">
        Nenhuma alteração
      </div>
      <div v-for="(item, indice) in alteracoes" :key="indice" class="py-1.5 px-2 flex items-center gap-2 cursor-pointer text-[13px] hover:bg-hover">
        <span class="w-4 h-4 flex items-center justify-center text-[10px] font-semibold rounded-sm" :class="{
          'bg-[#1e7fcc] text-white': item.tipo === 'M',
          'bg-[#2ea043] text-white': item.tipo === 'A',
          'bg-[#d73a49] text-white': item.tipo === 'D'
        }">{{ item.tipo }}</span>
        <span>{{ item.arquivo }}</span>
      </div>
    </div>
  </div>
</template>
