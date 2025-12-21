<script setup>
import { ref, onMounted } from 'vue'

import curriculoData from '@/data/curriculo.json'
import InfoPessoais from '@/components/curriculo/InfoPessoais.vue'
import Habilidades from '@/components/curriculo/Habilidades.vue'
import Experiencia from '@/components/curriculo/Experiencia.vue'
import Formacao from '@/components/curriculo/Formacao.vue'
import Projetos from '@/components/curriculo/Projetos.vue'
import Idiomas from '@/components/curriculo/Idiomas.vue'
import Resumo from '@/components/curriculo/Resumo.vue'
import Readme from '@/components/curriculo/Readme.vue'

const dados = ref(JSON.parse(JSON.stringify(curriculoData)))

const carregarDados = () => {
  const salvos = localStorage.getItem('curriculo-dados')
  if (salvos) {
    try {
      dados.value = JSON.parse(salvos)
    } catch (e) {
      console.error('Erro ao carregar dados:', e)
    }
  }
}

onMounted(() => carregarDados())
</script>

<template>
  <div class="h-full w-full overflow-y-auto bg-principal text-texto-principal">
    <div class="border-b border-borda-destaque text-end py-2 px-3">
      <button class="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-400">
        <UIcon name="line-md:file-document-filled" class="text-[18px]" />
      </button>
    </div>

    <div class="flex gap-4 w-full p-4">
      <div class="flex flex-col gap-4 w-6/12">
        <InfoPessoais :dados="dados" />
        <Habilidades :dados="dados" />
        <Formacao :dados="dados" />
      </div>
      <div class="flex flex-col gap-4 w-full">
        <Readme :dados="dados" />
        <Resumo :dados="dados" />
        <Experiencia :dados="dados" />
        <!-- <Projetos :dados="dados" />
        <Idiomas :dados="dados" /> -->
      </div>
    </div>

    <!-- Footer -->
    <div class="pt-8 border-t border-borda-principal text-center text-xs text-texto-secundario">
      <p>Currículo atualizado em {{ dados.configuracoes.atualizacao }}</p>
    </div>
  </div>
</template>
