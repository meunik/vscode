<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.experiencia.length > 0" class="flex flex-col gap-2 border-b border-borda-destaque pb-4">
  <h3 class="flex flex-wrap items-center gap-1 text-[12px] font-light text-texto-principal">
    <span>meunik</span>
    <span class="text-texto-destaque">/</span>
    <span class="font-normal">RESUMO PROFISSIONAL</span>
    <span class="text-texto-destaque">.txt</span>
  </h3>
  <p class="m-0 bg-secundario p-4 rounded">
    {{ dados.informacoesPessoais.resumo }}
  </p>
  <!-- <p class="m-0 bg-secundario p-4 rounded">
    Tenho 4 anos de experiência em desenvolvedor web. Atualmente trabalho no Complexo Regulador do Município do Rio de Janeiro, no qual atuo como Full Stack no desenvolvimento de sistemas para auxiliar a área da saúde do Município do Rio de Janeiro. Já trabalhei e trabalho com as tecnologias: 
    <span class="d-contents text-php">PHP</span>, 
    <span class="d-contents text-laravel">Laravel</span>, 
    <span class="d-contents text-lumen">Lumen</span>, 
    <span class="d-contents text-mysql">MySQL</span>, 
    <span class="d-contents text-html">HTML</span>, 
    <span class="d-contents text-css">CSS</span>, 
    <span class="d-contents text-javascript">JavaScript</span>, 
    <span class="d-contents text-vue">Vue.js</span>, 
    <span class="d-contents text-html">
      <span class="contents figma-f">F</span>
      <span class="contents figma-i">i</span>
      <span class="contents figma-g">g</span>
      <span class="contents figma-m">m</span>
      <span class="contents figma-a">a</span>
    </span>, 
    <span class="d-contents text-jquery">jQuery</span>. No meu trabalho anterior desenvolvi um sistema de RH, utilizado por 72 clínicas particulares espalhadas pelo Brasil, com mais de 12 mil funcionários inseridos no sistema. Também fiz um sistema para acompanhamento diário de diálises realizadas por 19 clínicas.
  </p> -->
</div>
</template>

<style scoped>
.text-git {
  color: #e84d31;
}
.text-php {
  color: #6181b6;
}
.text-laravel {
  color: #e32b20;
}
.text-lumen {
  color: #e74430;
}
.text-mysql {
  color: #00618a;
}
.text-html {
  color: #e44d26;
}
.text-css {
  color: #33a9dc;
}
.text-javascript {
  color: #f0db4f;
}
.text-vue {
  color: #41b883;
}
.text-jquery {
  color: #0868ac;
}
.text-bootstrap-vue {
  color: #563d7c;
}


.figma-f {
  color: #f24e1e;
}
.figma-i {
  color: #ff7262;
}
.figma-g {
  color: #a259ff;
}
.figma-m {
  color: #1abcfe;
}
.figma-a {
  color: #0acf83;
}
</style>