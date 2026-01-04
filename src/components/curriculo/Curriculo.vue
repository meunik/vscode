<script setup>
import { ref, onMounted } from 'vue'
import { useCurriculo } from '@/composables/useApi'
import InfoPessoais from '@/components/curriculo/InfoPessoais.vue'
import Habilidades from '@/components/curriculo/Habilidades.vue'
import Experiencia from '@/components/curriculo/Experiencia.vue'
import Formacao from '@/components/curriculo/Formacao.vue'
import Projetos from '@/components/curriculo/Projetos.vue'
import Idiomas from '@/components/curriculo/Idiomas.vue'
import Resumo from '@/components/curriculo/Resumo.vue'
import CurriculoReadme from '@/components/curriculo/CurriculoReadme.vue'
import LoadingMessage from '@/components/common/LoadingMessage.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'

const { curriculo, loading, error } = useCurriculo()
const dados = ref(null)

onMounted(() => {
  if (curriculo.value) {
    dados.value = curriculo.value
  }
})

</script>

<template>
  <div v-if="loading" class="h-full w-full flex items-center justify-center bg-principal text-texto-principal">
    <LoadingMessage message="Carregando currículo..." />
  </div>

  <div v-else-if="error" class="h-full w-full flex items-center justify-center bg-principal text-texto-principal">
    <ErrorMessage message="Erro ao carregar currículo" />
  </div>

  <div v-else-if="curriculo" class="h-full w-full overflow-y-auto bg-principal text-texto-principal">
    <div class="border-b border-borda-destaque text-end py-2 px-3">
      <button class="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-400">
        <UIcon name="line-md:file-document-filled" class="text-[18px]" />
      </button>
    </div>

    <div class="flex flex-wrap sm:flex-nowrap gap-4 w-full p-4">
      <div class="flex flex-col gap-4 w-full sm:w-4/12">
        <InfoPessoais :dados="curriculo" />
        <Habilidades :dados="curriculo" />
        <Formacao :dados="curriculo" />
      </div>
      <div class="flex flex-col gap-4 w-full sm:w-8/12">
        <CurriculoReadme :dados="curriculo" />
        <Resumo :dados="curriculo" />
        <Experiencia :dados="curriculo" />
        <!-- <Projetos :dados="curriculo" />
        <Idiomas :dados="curriculo" /> -->
      </div>
    </div>

    <!-- Footer -->
    <div class="pt-0 pb-0.5 border-t border-borda-principal text-center text-xs text-texto-secundario">
      <p>Currículo atualizado em {{ curriculo.configuracoes.atualizacao }}</p>
    </div>
  </div>
</template>
