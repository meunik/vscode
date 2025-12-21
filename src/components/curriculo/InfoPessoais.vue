<script setup>
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
    
    <div v-if="dados.links.length > 0" class="flex flex-col text-texto-secundario">
      <template v-for="link in dados.links" :key="index">
        <a v-if="link.url" :href="link.url" class="flex items-center gap-2">
          <UIcon :name="link.icone" class="text-[18px]" />
          <span class="hover:text-texto-destaque hover:underline">{{ link.titulo }}</span>
        </a>
        <span v-else class="flex items-center gap-2">
          <UIcon :name="link.icone" class="text-[18px]" />
          <span>{{ link.titulo }}</span>
        </span>
      </template>
    </div>
  </div>
</div>
</template>