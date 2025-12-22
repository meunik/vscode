<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.experiencia.length > 0" class="flex flex-col gap-2">
  <h3 class="flex flex-wrap items-center gap-1 text-[12px] font-light text-texto-principal">
    <span>meunik</span>
    <span class="text-texto-destaque">/</span>
    <span class="font-normal">HISTÓRICO PROFISSIONAL</span>
    <span class="text-texto-destaque">.md</span>
  </h3>
  <div class="space-y-6">
    <div 
      v-for="(exp, idx) in dados.experiencia" 
      :key="idx"
      class="p-4 bg-secundario rounded"
    >
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-sm text-texto-principal">{{ exp.cargo }}</h4>
        <span class="text-xs text-texto-secundario">{{ exp.periodo }}</span>
      </div>
      <p class="text-lg font-semibold text-texto-destaque mb-3">{{ exp.empresa }}</p>
      <p class="text-sm text-texto-principal mb-3">{{ exp.descricao }}</p>
      <ul v-if="exp.realizacoes.length > 0" class="space-y-1 list-disc pl-8 text-texto-secundario">
        <li v-for="(realizacao, rIdx) in exp.realizacoes" :key="rIdx">{{ realizacao }}</li>
      </ul>
    </div>
  </div>
</div>
</template>