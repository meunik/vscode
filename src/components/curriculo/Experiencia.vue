<script>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.experiencia.length > 0" class="mb-8">
  <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
    <Icon name="pasta" :size="24" />
    Experiência Profissional
  </h3>
  <div class="space-y-6">
    <div 
      v-for="(exp, idx) in dados.experiencia" 
      :key="idx"
      class="p-4 bg-secundario border border-borda-principal rounded"
    >
      <div class="flex justify-between items-start mb-2">
        <h4 class="text-lg font-semibold text-texto-principal">{{ exp.cargo }}</h4>
        <span class="text-xs text-texto-secundario">{{ exp.periodo }}</span>
      </div>
      <p class="text-sm text-destaque mb-3">{{ exp.empresa }}</p>
      <p class="text-sm text-texto-secundario mb-3">{{ exp.descricao }}</p>
      <ul v-if="exp.realizacoes.length > 0" class="space-y-1">
        <li 
          v-for="(realizacao, rIdx) in exp.realizacoes" 
          :key="rIdx"
          class="text-sm text-texto-principal flex gap-2"
        >
          <span class="text-destaque">•</span>
          <span>{{ realizacao }}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>