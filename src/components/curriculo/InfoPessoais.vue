<script>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div class="flex gap-8 items-start mb-8 pb-8 border-b border-borda-principal">
  <div v-if="dados.informacoesPessoais.foto && dados.configuracoes.mostrarFoto" class="shrink-0">
    <img 
      :src="dados.informacoesPessoais.foto" 
      :alt="dados.informacoesPessoais.nome"
      class="w-32 h-32 rounded-full border-4 border-destaque object-cover"
    />
  </div>
  <div class="flex-1">
    <h1 class="text-4xl font-bold text-texto-principal mb-2">{{ dados.informacoesPessoais.nome }}</h1>
    <h2 class="text-xl text-destaque mb-4">{{ dados.informacoesPessoais.cargo }}</h2>
    <div class="space-y-1 text-sm text-texto-secundario mb-4">
      <div class="flex items-center gap-2">
        <Icon name="email" :size="16" />
        <span>{{ dados.informacoesPessoais.email }}</span>
      </div>
      <div v-if="dados.informacoesPessoais.telefone" class="flex items-center gap-2">
        <Icon name="telefone" :size="16" />
        <span>{{ dados.informacoesPessoais.telefone }}</span>
      </div>
      <div v-if="dados.informacoesPessoais.localizacao" class="flex items-center gap-2">
        <Icon name="localizacao" :size="16" />
        <span>{{ dados.informacoesPessoais.localizacao }}</span>
      </div>
    </div>
    <p class="text-texto-principal leading-relaxed">{{ dados.informacoesPessoais.resumo }}</p>
  </div>
</div>
</template>