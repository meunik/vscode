<script setup>
import { ref } from 'vue'
import { obterIconeArquivo } from '@/utils/icones'

import curriculoData from '@/data/curriculo.json'
import Links from '@/components/curriculo/Links.vue'

const dados = ref(JSON.parse(JSON.stringify(curriculoData)))
</script>

<template>
  <div class="h-full w-full grid max-w-300 mx-auto grid-rows-[25%_minmax(min-content,auto)_min-content] grid-cols-[1fr_6fr_1fr_6fr_1fr] text-texto-principal">
    
    <div class="col-start-2 col-end-5 row-start-1 self-end space-y-2 mb-4">
      <h1 class="text-4xl font-bold">Olá, sou Marcos Paulo 😁</h1>
      <p>Bem vindo ao meu site</p>
    </div>
    
    <div class="col-start-2 col-end-3 row-start-2 flex flex-col gap-4">
      <div class="flex flex-col">
        <h2 class="text-4xl font-bold text-texto-secundario">Iniciar</h2>
        <ul class="pl-8 mt-2 space-y-1">
          <li class="flex items-center gap-1 cursor-pointer text-texto-destaque hover:text-texto-destaque/70">
            <UIcon :name="obterIconeArquivo('Curriculo.md')" class="text-[20px] shrink-0" />
            Currículo.md
          </li>
        </ul>
      </div>
      <div class="flex flex-col">
        <h2 class="text-4xl font-bold text-texto-secundario">Recente</h2>
        <div>
          <span class=""></span>
        </div>
      </div>
    </div>
    
    <div class="col-start-4 col-end-5 row-start-2 flex flex-col">
      <h2 class="text-4xl font-bold text-texto-secundario">Resumo</h2>
      <div class="flex flex-col gap-2 py-4">
        <div class="flex items-center gap-4">
          <img 
            :src="dados.informacoesPessoais.foto" 
            :alt="dados.informacoesPessoais.nome"
            class="w-28 rounded-full border border-destaque object-cover"
          />
          <h1 class="text-3xl font-bold text-texto-principal">
            {{ dados.informacoesPessoais.nome }}
            <span class="text-2xl font-light">{{ dados.informacoesPessoais.sobreNome }}</span>
          </h1>
        </div>
        <h2 class="text-xl text-destaque">{{ dados.informacoesPessoais.cargo }}</h2>
      </div>
      <Links :dados="dados" />
      <hr class="border-borda-destaque my-2">
      <div class="flex gap-4 flex-wrap">
        <span class="text-lg tracking-wider font-light">Stacks:</span>
        <UIcon name="devicon:vuejs" class="text-[28px]" />
        <UIcon name="devicon:php" class="text-[28px]" />
        <UIcon name="devicon:laravel" class="text-[28px]" />
        <UIcon name="devicon:mysql" class="text-[28px]" />
        <UIcon name="devicon:git" class="text-[28px]" />
        <UIcon name="devicon:javascript" class="text-[28px]" />
        <UIcon name="devicon:typescript" class="text-[28px]" />
        <UIcon name="devicon:tailwindcss" class="text-[28px]" />
        <UIcon name="devicon:docker" class="text-[28px]" />
        <UIcon name="devicon:python" class="text-[28px]" />
        <UIcon name="devicon:reactnative" class="text-[28px]" />
      </div>
    </div>
    
    <!-- Footer: ocupa colunas 2-4, linha 3 (se necessário) -->
    <div class="col-start-2 col-end-5 row-start-3 text-center text-sm">Um projeto de portfolio interativo</div>
  </div>
</template>