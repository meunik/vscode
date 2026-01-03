<script setup>
import MarkdownViewer from '../MarkdownViewer.vue'
import Icon from '@/assets/icons/Icon.vue'

defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.experiencia.length > 0" class="flex flex-col gap-2">
  <h3 class="flex flex-wrap items-center gap-1 text-[12px] font-light text-texto-principal">
    <span>meunik</span>
    <span class="text-texto-destaque">/</span>
    <span class="font-normal">HISTÓRICO PROFISSIONAL</span>
    <span class="text-texto-destaque">.md</span>
  </h3>
  <div class="space-y-4">
    <div v-for="(exp, idx) in dados.experiencia" :key="idx" class="flex flex-col gap-2 p-4 bg-secundario rounded">
      <div class="flex justify-between items-start">
        <h4 class="text-sm text-texto-principal font-semibold">{{ exp.cargo }}</h4>
        <span class="text-xs text-texto-secundario">{{ exp.periodo }}</span>
      </div>
      <p class="text-lg font-semibold text-texto-destaque">{{ exp.empresa }}</p>

      <div class="">
        <MarkdownViewer :conteudo="exp.descricao" />
      </div>

      <div v-if="exp.realizacoes.length > 0" class="">
        <MarkdownViewer :conteudo="'- ' + exp.realizacoes.join('\n- ')" class="text-texto-secundario" />
      </div>

      <div v-if="exp.stacks && exp.stacks.length > 0" class="flex flex-wrap gap-2">
        <span class="text-sm text-texto-secundario font-semibold">Stacks:</span>
        <UIcon v-for="(stack, sIdx) in exp.stacks" :key="sIdx" :name="stack" class="text-[20px]" />
      </div>
    </div>
  </div>
</div>
</template>