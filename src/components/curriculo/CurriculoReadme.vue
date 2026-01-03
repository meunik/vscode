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
    <span class="font-normal">README</span>
    <span class="text-texto-destaque">.md</span>
  </h3>
  <div class="flex flex-col gap-4 bg-secundario p-4 rounded">
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-bold">Olá sou Marcos Paulo 👋</h2>
      <ul class="list-disc pl-8">
        <li>💻 Atualmente trabalho como Full Stack (Vue + Laravel).</li>
      </ul>
    </div>
    <div class="flex gap-4 flex-wrap">
      <UIcon name="devicon:vuejs" class="text-[28px]" />
      <UIcon name="devicon:php" class="text-[28px]" />
      <UIcon name="devicon:laravel" class="text-[28px]" />
      <UIcon name="devicon:mysql" class="text-[28px]" />
      <UIcon name="devicon:git" class="text-[28px]" />
      <UIcon name="devicon:javascript" class="text-[28px]" />
      <UIcon name="devicon:typescript" class="text-[28px]" />
      <UIcon name="devicon:tailwindcss" class="text-[28px]" />
      <UIcon name="devicon:bootstrap" class="text-[28px]" />
      <UIcon name="devicon:docker" class="text-[28px]" />
      <UIcon name="devicon:python" class="text-[28px]" />
      <UIcon name="devicon:reactnative" class="text-[28px]" />
      <UIcon name="logos:apple-app-store" class="text-[28px]" />
      <UIcon name="logos:google-play-icon" class="text-[28px]" />
    </div>
  </div>
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