<script>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
<div v-if="dados.habilidades.length > 0" class="mb-8">
  <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
    <Icon name="codigo" :size="24" />
    Habilidades
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div v-for="(categoria, idx) in dados.habilidades" :key="idx" class="space-y-3">
      <h4 class="text-lg font-semibold text-destaque">{{ categoria.categoria }}</h4>
      <div class="space-y-2">
        <div v-for="(item, itemIdx) in categoria.itens" :key="itemIdx" class="space-y-1">
          <div class="flex justify-between text-sm">
            <span class="text-texto-principal">{{ item.nome }}</span>
            <span class="text-texto-secundario" v-if="dados.configuracoes.mostrarNivelHabilidades">{{ item.nivel }}%</span>
          </div>
          <div v-if="dados.configuracoes.mostrarNivelHabilidades" class="w-full h-2 bg-secundario rounded-full overflow-hidden">
            <div 
              class="h-full bg-destaque transition-all duration-300"
              :style="{ width: item.nivel + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>