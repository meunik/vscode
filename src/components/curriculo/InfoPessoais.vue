<script setup>
import Links from '@/components/curriculo/Links.vue'

defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div class="flex flex-col gap-8 border-b border-borda-destaque pb-4">
  <div v-if="dados.informacoesPessoais.foto && dados.configuracoes.mostrarFoto" class="shrink-0">
    <img 
      :src="dados.informacoesPessoais.foto" 
      :alt="dados.informacoesPessoais.nome"
      class="w-full rounded-full border border-destaque object-cover -mt-8"
    />
  </div>
  <div class="flex-1 flex flex-col gap-4">
    <h1 class="text-3xl font-bold text-texto-principal">
      {{ dados.informacoesPessoais.nome }}
      <span class="text-2xl font-light">{{ dados.informacoesPessoais.sobreNome }}</span>
    </h1>

    <h2 class="text-xl text-destaque">{{ dados.informacoesPessoais.cargo }}</h2>
    
    <Links :dados="dados" />
  </div>
</div>
</template>