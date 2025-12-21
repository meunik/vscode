<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.habilidades.length > 0" class="flex flex-col gap-2 border-b border-borda-destaque pb-4">
  <h3 class="flex items-center gap-1 text-[12px] font-light text-texto-principal">
    <span>meunik</span>
    <span class="text-texto-destaque">/</span>
    <span class="font-normal">HABILIDADES E COMPETÊNCIAS</span>
    <span class="text-texto-destaque">.html</span>
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div v-for="(categoria, idx) in dados.habilidades" :key="idx" class="space-y-3">
      <h4 class="text-lg font-semibold text-destaque">{{ categoria.categoria }}</h4>
      <div class="space-y-1">
        <div v-for="(item, itemIdx) in categoria.itens" :key="itemIdx" class="space-y-1">
          <div class="flex items-center gap-1 text-sm">
            <UIcon :name="item.icone" class="text-[16px]" />
            <span class="text-texto-principal">{{ item.nome }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>