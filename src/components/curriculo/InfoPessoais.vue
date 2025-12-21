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

    <!-- <p class="text-texto-principal leading-relaxed">{{ dados.informacoesPessoais.resumo }}</p> -->

    <div class="flex flex-col text-texto-secundario">
      <span class="flex items-center gap-2">
        <UIcon name="grommet-icons:location" class="text-[18px]" />
        <span>Rio de Janeiro/RJ</span>
      </span>
      <a href="mailto:marcostrab@hotmail.com" class="flex items-center gap-2">
        <UIcon name="grommet-icons:mail" class="text-[18px]" />
        <span class="hover:text-texto-destaque hover:underline">marcostrab@hotmail.com</span>
      </a>
      <a href="https://www.linkedin.com/in/marcospaulo505058185/" class="flex items-center gap-2">
        <UIcon name="grommet-icons:linkedin" class="text-[18px]" />
        <span class="hover:text-texto-destaque hover:underline">in/marcospaulo505058185</span>
      </a>
      <a href="https://www.instagram.com/meunikmp" class="flex items-center gap-2">
        <UIcon name="grommet-icons:instagram" class="text-[18px]" />
        <span class="hover:text-texto-destaque hover:underline">meunikmp</span>
      </a>
      <a href="https://github.com/meunik" class="flex items-center gap-2">
        <UIcon name="grommet-icons:github" class="text-[18px]" />
        <span class="hover:text-texto-destaque hover:underline">Github</span>
      </a>
    </div>
  </div>
</div>
</template>