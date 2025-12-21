<script setup>
defineProps({
  dados: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="space-y-4">
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">Nome</label>
      <input 
        v-model="dados.nome" 
        type="text" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
      />
    </div>
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">Cargo</label>
      <input 
        v-model="dados.cargo" 
        type="text" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
      />
    </div>
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">Email</label>
      <input 
        v-model="dados.email" 
        type="email" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
      />
    </div>
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">Telefone</label>
      <input 
        v-model="dados.telefone" 
        type="tel" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
      />
    </div>
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">Localização</label>
      <input 
        v-model="dados.localizacao" 
        type="text" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
      />
    </div>
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">URL da Foto</label>
      <input 
        v-model="dados.foto" 
        type="url" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors" 
      />
    </div>
    <div>
      <label class="block text-xs font-medium text-texto-secundario mb-1.5">Resumo</label>
      <textarea 
        v-model="dados.resumo" 
        rows="4" 
        class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-borda-destaque transition-colors resize-none"
      ></textarea>
    </div>
  </div>
</template>
