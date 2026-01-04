<script setup>
import { ref, computed } from 'vue'
import { useSetup } from '@/composables/useApi'
import LoadingMessage from '@/components/common/LoadingMessage.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'

const { setup: setupData, loading, error } = useSetup()
const setup = computed(() => setupData.value || {})

const cores = {
  blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
  yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  green: 'bg-green-500/10 border-green-500/30 text-green-400',
  red: 'bg-red-500/10 border-red-500/30 text-red-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  orange: 'bg-orange-500/10 border-orange-500/30 text-orange-400'
}

const totalArmazenamento = computed(() => {
  if (!setup.value.armazenamento) return 0
  return setup.value.armazenamento.reduce((acc, item) => {
    const valor = parseFloat(item.capacidade)
    return acc + valor
  }, 0)
})
</script>

<template>
  <div class="h-full w-full overflow-auto bg-principal p-6">
    <div v-if="loading" class="h-full flex items-center justify-center">
      <LoadingMessage message="Carregando setup..." />
    </div>

    <div v-else-if="error" class="h-full flex items-center justify-center">
      <ErrorMessage message="Erro ao carregar setup" />
    </div>

    <div v-else-if="setup.cpu" class="max-w-350 mx-auto space-y-6">
      
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-texto-principal mb-2">Meu Setup</h1>
        <p class="text-texto-secundario">Configuração completa do meu ambiente de trabalho</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        <div :class="['border-none rounded-lg p-5 transition-all hover:scale-105', cores[setup.cpu.cor]]">
          <div class="flex items-center gap-3 mb-3">
            <UIcon :name="setup.cpu.icone" class="text-3xl" />
            <h2 class="text-xl font-bold text-texto-principal">CPU</h2>
          </div>
          <p class="text-texto-principal font-medium">{{ setup.cpu.nome }}</p>
        </div>

        <div :class="['border-none rounded-lg p-5 transition-all hover:scale-105', cores[setup.placaMae.cor]]">
          <div class="flex items-center gap-3 mb-3">
            <UIcon :name="setup.placaMae.icone" class="text-3xl" />
            <h2 class="text-xl font-bold text-texto-principal">Placa Mãe</h2>
          </div>
          <p class="text-texto-principal font-medium">{{ setup.placaMae.nome }}</p>
          <p class="text-texto-secundario text-sm mt-1">{{ setup.placaMae.socket }}</p>
        </div>

        <div :class="['border-none rounded-lg p-5 transition-all hover:scale-105', cores[setup.memoriaRam.cor]]">
          <div class="flex items-center gap-3 mb-3">
            <UIcon :name="setup.memoriaRam.icone" class="text-3xl" />
            <h2 class="text-xl font-bold text-texto-principal">Memória RAM</h2>
          </div>
          <p class="text-texto-principal font-medium text-2xl">{{ setup.memoriaRam.quantidade }}</p>
          <p class="text-texto-secundario text-sm mt-1">{{ setup.memoriaRam.detalhes }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        <div :class="['border-none rounded-lg p-5 transition-all hover:scale-105', cores[setup.video.gpu.cor]]">
          <div class="flex items-center gap-3 mb-4">
            <UIcon :name="setup.video.gpu.icone" class="text-3xl" />
            <h2 class="text-xl font-bold text-texto-principal">Placa de Vídeo</h2>
          </div>
          <p class="text-texto-principal font-medium">{{ setup.video.gpu.nome }}</p>
          <p class="text-texto-secundario text-sm mt-1">{{ setup.video.gpu.fabricante }}</p>
        </div>

        <div class="bg-purple-500/10 border-none rounded-lg p-5 transition-all hover:scale-105">
          <div class="flex items-center gap-3 mb-4">
            <UIcon name="mdi:monitor-multiple" class="text-3xl text-purple-400" />
            <h2 class="text-xl font-bold text-texto-principal">Monitores</h2>
          </div>
          <div class="space-y-3">
            <div v-for="(monitor, index) in setup.video.monitores" :key="index" class="bg-principal/50 rounded p-3">
              <div class="flex items-center gap-2 mb-1">
                <UIcon :name="monitor.icone" class="text-lg text-purple-400" />
                <p class="text-texto-principal font-medium">{{ monitor.nome }}</p>
              </div>
              <div class="flex gap-2 text-xs text-texto-secundario">
                <span>{{ monitor.tamanho }}</span>
                <span>•</span>
                <span>{{ monitor.tipo || monitor.resolucao }}</span>
                <span v-if="monitor.taxa">• {{ monitor.taxa }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-cyan-500/10 border-none rounded-lg p-5">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <UIcon name="mdi:harddisk-plus" class="text-3xl text-cyan-400" />
            <h2 class="text-xl font-bold text-texto-principal">Armazenamento</h2>
          </div>
          <div class="text-right">
            <p class="text-2xl font-bold text-cyan-400">{{ totalArmazenamento.toFixed(0) }}GB</p>
            <p class="text-xs text-texto-secundario">Total</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="(disco, index) in setup.armazenamento" :key="index" class="bg-principal/50 rounded p-3 hover:bg-principal/70 transition-all hover:scale-105">
            <div class="flex items-center gap-2 mb-2">
              <UIcon :name="disco.icone" class="text-lg text-cyan-400" />
              <span class="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-xs rounded font-medium">{{ disco.tipo }}</span>
              <span class="text-texto-principal font-bold">{{ disco.capacidade }}</span>
            </div>
            <p class="text-texto-secundario text-xs truncate">{{ disco.modelo }}</p>
          </div>
        </div>
      </div>

      <div class="bg-linear-to-br from-purple-500/10 to-pink-500/10 border-none rounded-lg p-5">
        <div class="flex items-center gap-3 mb-4">
          <UIcon name="mdi:devices" class="text-3xl text-purple-400" />
          <h2 class="text-xl font-bold text-texto-principal">Periféricos</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="(item, index) in setup.perifericos" :key="index" class="bg-principal/50 rounded-lg p-4 hover:bg-principal/70 transition-all hover:scale-105">
            <div class="flex items-start gap-3">
              <UIcon :name="item.icone" class="text-2xl text-purple-400 mt-1" />
              <div class="flex-1">
                <p class="text-texto-principal font-medium text-sm leading-tight">{{ item.nome }}</p>
                <p v-if="item.cor" class="text-texto-secundario text-xs mt-1">{{ item.cor }}</p>
                <p v-if="item.detalhes" class="text-texto-secundario text-xs mt-1">{{ item.detalhes }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="setup.outrosDispositivos && setup.outrosDispositivos.length > 0" class="bg-secundario border-none rounded-lg p-5">
        <div class="flex items-center gap-3 mb-4">
          <UIcon name="material-symbols:devices-outline-rounded" class="text-3xl text-orange-400" />
          <h2 class="text-xl font-bold text-texto-principal">Outros Dispositivos</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(dispositivo, index) in setup.outrosDispositivos" :key="index" class="bg-principal/50 rounded-lg p-4 hover:bg-principal/70 transition-all hover:scale-105">
            <div class="flex items-start gap-3">
              <UIcon :name="dispositivo.icone" class="text-3xl text-orange-400" />
              <div class="flex-1">
                <p class="text-texto-principal font-bold text-lg">{{ dispositivo.nome }}</p>
                <p class="text-orange-400 text-sm mt-1">{{ dispositivo.tipo }}</p>
                <p v-if="dispositivo.detalhes" class="text-texto-secundario text-sm mt-1">{{ dispositivo.detalhes }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

