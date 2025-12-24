<script setup>
import { ref } from 'vue'
import { obterIconeArquivo } from '@/utils/icones'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useArquivos } from '@/composables/useArquivos'
import { useGithubStore } from '@/stores/github'
import Icon from '@/assets/icons/Icon.vue'

import curriculoData from '@/data/curriculo.json'
import Links from '@/components/curriculo/Links.vue'

const dados = ref(JSON.parse(JSON.stringify(curriculoData)))

const { abrirArquivo, historicoRecente } = useEditorAbas()
const { encontrarItemPorCaminho, expandirCaminhoParaArquivo } = useArquivos()
const githubStore = useGithubStore()

const abrirCurriculo = () => {
  const arquivo = encontrarItemPorCaminho('Profissional/Curriculo.md')
  if (arquivo) {
    const metadados = {
      componente: arquivo.componente,
      componenteProps: arquivo.componenteProps,
      icone: {
        tipo: 'uicon',
        valor: obterIconeArquivo(arquivo.nome)
      }
    }
    abrirArquivo(arquivo.caminho, arquivo.nome, '', arquivo.tipoEditor || 'componente', metadados)
    expandirCaminhoParaArquivo(arquivo.caminho)
  }
}

const abrirArquivoRecente = async (item) => {
  const arquivo = encontrarItemPorCaminho(item.caminho)
  
  if (arquivo) {
    let conteudo = arquivo.conteudo || ''
    
    if (arquivo.isGithubRepo && arquivo.repoData) {
      conteudo = await githubStore.buscarReadme(arquivo.repoData)
    }
    
    const metadados = {
      componente: arquivo.componente,
      componenteProps: arquivo.componenteProps,
      isGithubRepo: arquivo.isGithubRepo,
      repoData: arquivo.repoData,
      icone: {
        tipo: 'uicon',
        valor: obterIconeArquivo(arquivo.nome)
      }
    }
    
    abrirArquivo(arquivo.caminho, arquivo.nome, conteudo, arquivo.tipoEditor || 'texto', metadados)
    expandirCaminhoParaArquivo(arquivo.caminho)
  } else {
    const metadados = {
      componente: item.componente,
      componenteProps: item.componenteProps,
      icone: item.icone || {
        tipo: 'uicon',
        valor: obterIconeArquivo(item.titulo)
      }
    }
    
    abrirArquivo(item.caminho, item.titulo, '', item.tipoEditor || 'componente', metadados)
  }
}
</script>

<template>
  <div class="h-full w-full overflow-y-auto overflow-x-hidden">
    <div class="min-h-full w-full flex flex-col px-4 sm:px-6 md:px-8 sm:grid sm:max-w-300 sm:mx-auto sm:grid-rows-[25%_minmax(min-content,auto)_min-content] sm:grid-cols-[1fr_6fr_1fr_6fr_1fr] text-texto-principal">
      
      <div class="pt-8 sm:pt-0 sm:col-start-2 sm:col-end-5 sm:row-start-1 sm:self-end space-y-2 mb-4">
        <h1 class="text-2xl sm:text-4xl font-bold">Olá, sou Marcos Paulo 😁</h1>
        <p class="text-sm sm:text-base">Bem vindo ao meu site</p>
      </div>
      
      <div class="sm:col-start-2 sm:col-end-3 sm:row-start-2 flex flex-col gap-4 mb-6 sm:mb-0">
        <div class="flex flex-col">
          <h2 class="text-2xl sm:text-4xl font-bold text-texto-secundario">Iniciar</h2>
          <ul class="pl-4 sm:pl-8 mt-2 space-y-1">
            <li 
              class="flex items-center gap-1 cursor-pointer text-texto-destaque hover:text-texto-destaque/70 text-sm sm:text-base"
              @click="abrirCurriculo"
            >
              <UIcon :name="obterIconeArquivo('Curriculo.md')" class="text-[18px] sm:text-[20px] shrink-0" />
              Currículo.md
            </li>
          </ul>
        </div>
        <div class="flex flex-col">
          <h2 class="text-2xl sm:text-4xl font-bold text-texto-secundario">Recentes</h2>
          <ul class="pl-4 sm:pl-8 mt-2 space-y-1">
            <li 
              v-for="item in historicoRecente" 
              :key="item.caminho"
              class="flex items-center gap-1 cursor-pointer text-texto-destaque hover:text-texto-destaque/70 text-sm sm:text-base"
              @click="abrirArquivoRecente(item)"
            >
              <Icon v-if="item.icone?.tipo === 'icon'" :name="item.icone.valor" :size="20" class="shrink-0" />
              <UIcon v-else-if="item.icone?.tipo === 'uicon'" :name="item.icone.valor" class="text-[18px] sm:text-[20px] shrink-0" />
              <img v-else-if="item.icone?.tipo === 'img'" :src="item.icone.valor" :alt="item.titulo" class="w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 object-contain" />
              <UIcon v-else :name="obterIconeArquivo(item.titulo)" class="text-[18px] sm:text-[20px] shrink-0" />
              {{ item.titulo }}
            </li>
            <li v-if="historicoRecente.length === 0" class="text-texto-secundario text-sm">
              Nenhum arquivo recente
            </li>
          </ul>
        </div>
      </div>
      
      <div class="sm:col-start-4 sm:col-end-5 sm:row-start-2 flex flex-col mb-6 sm:mb-0">
        <h2 class="text-2xl sm:text-4xl font-bold text-texto-secundario">
          Resumo
          <span class="text-lg sm:text-2xl font-light">sobre mim</span>
        </h2>
        <div class="flex flex-col gap-2 py-4">
          <div class="flex flex-col sm:flex-row items-center sm:items-center gap-4">
            <img 
              :src="dados.informacoesPessoais.foto" 
              :alt="dados.informacoesPessoais.nome"
              class="w-20 sm:w-28 rounded-full border border-destaque object-cover"
            />
            <h1 class="text-xl sm:text-3xl font-bold text-texto-principal text-center sm:text-left">
              {{ dados.informacoesPessoais.nome }}
              <span class="text-lg sm:text-2xl font-light block sm:inline">{{ dados.informacoesPessoais.sobreNome }}</span>
            </h1>
          </div>
          <h2 class="text-lg sm:text-xl text-destaque text-center sm:text-left">{{ dados.informacoesPessoais.cargo }}</h2>
        </div>
        <Links :dados="dados" />
        <hr class="border-borda-destaque my-2">
        <div class="flex gap-3 sm:gap-4 flex-wrap items-center justify-center sm:justify-start">
          <span class="text-base sm:text-lg tracking-wider font-light w-full sm:w-auto text-center sm:text-left">Stacks:</span>
          <UIcon name="devicon:vuejs" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:php" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:laravel" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:mysql" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:git" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:javascript" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:typescript" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:tailwindcss" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:docker" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:python" class="text-[24px] sm:text-[28px]" />
          <UIcon name="devicon:reactnative" class="text-[24px] sm:text-[28px]" />
        </div>
      </div>

      <div class="py-6 sm:col-start-2 sm:col-end-5 sm:row-start-3 text-center text-xs sm:text-sm text-texto-secundario">
        Um projeto de portfolio interativo
      </div>
    </div>
  </div>
</template>