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
  <div class="py-2 text-texto-principal">
    <div class="mb-5 px-2">
      <textarea
        v-model="mensagemCommit"
        placeholder="Mensagem do commit"
        class="w-full px-2 py-1 bg-input border border-input text-texto-principal text-[13px] font-sans resize-y outline-none focus:border-borda-destaque rounded-sm"
        rows="1"
      ></textarea>
      <button @click="commit" class="w-full px-2 py-1 bg-botao border-none text-white text-[13px] font-medium cursor-pointer transition-colors hover:bg-botao-hover disabled:bg-input disabled:text-texto-secundario disabled:cursor-not-allowed rounded-sm" :disabled="!mensagemCommit.trim()">
        Confirmar
      </button>
    </div>
    <div>
      <div class="px-2 text-[11px] font-semibold text-texto-secundario uppercase tracking-wider">ALTERAÇÕES</div>
      <div v-if="alteracoes.length === 0" class="px-3 text-texto-secundario text-[13px] text-center">
        Nenhuma alteração
      </div>
      <div v-for="(item, indice) in alteracoes" :key="indice" class="py-1.5 px-4 flex items-center gap-2 cursor-pointer text-[13px] hover:bg-hover">
        <span class="flex-1 tresPontinhos min-w-0">{{ item.arquivo }}</span>
      </div>
    </div>
  </div>
</template>
