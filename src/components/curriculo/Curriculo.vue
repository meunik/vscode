<script setup>
import { ref, onMounted } from 'vue'

import curriculoData from '@/data/curriculo.json'
import InfoPessoais from '@/components/curriculo/InfoPessoais.vue'
import Links from '@/components/curriculo/Links.vue'
import Habilidades from '@/components/curriculo/Habilidades.vue'
import Experiencia from '@/components/curriculo/Experiencia.vue'
import Formacao from '@/components/curriculo/Formacao.vue'
import Projetos from '@/components/curriculo/Projetos.vue'
import Idiomas from '@/components/curriculo/Idiomas.vue'

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
  <div class="h-full overflow-y-auto bg-principal text-texto-principal p-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex flex-col">
        <InfoPessoais :dados="dados" />
        <Links :dados="dados" />
        <Habilidades :dados="dados" />
      </div>
      <div class="flex flex-col">
        <Experiencia :dados="dados" />
        <Formacao :dados="dados" />
        <Projetos :dados="dados" />
        <Idiomas :dados="dados" />
      </div>

      <!-- Footer -->
      <div class="pt-8 border-t border-borda-principal text-center text-xs text-texto-secundario">
        <p>Currículo atualizado em {{ new Date().toLocaleDateString('pt-BR') }}</p>
      </div>
    </div>
  </div>
</template>
