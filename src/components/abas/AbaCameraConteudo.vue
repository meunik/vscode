<script setup>
import { ref } from 'vue'

const cameras = ref([
  { id: 'cam1', nome: 'Câmera Frontal', ativa: false },
  { id: 'cam2', nome: 'Câmera Traseira', ativa: false }
])

const cameraAtiva = ref(null)

const ativarCamera = (id) => {
  cameras.value.forEach(cam => {
    cam.ativa = cam.id === id
  })
  cameraAtiva.value = id
}

const desativarCamera = () => {
  cameras.value.forEach(cam => {
    cam.ativa = false
  })
  cameraAtiva.value = null
}
</script>

<template>
  <div class="p-3 text-texto-principal">
    <div class="text-[11px] font-semibold text-texto-secundario mb-3 uppercase tracking-wider">DISPOSITIVOS</div>
    <div class="flex flex-col gap-2 mb-5">
      <div
        v-for="camera in cameras"
        :key="camera.id"
        class="py-2.5 px-3 bg-terciario rounded cursor-pointer flex items-center gap-2.5 transition-colors hover:bg-input"
        @click="ativarCamera(camera.id)"
      >
        <span class="text-base">📹</span>
        <span>{{ camera.nome }}</span>
        <span v-if="camera.ativa" class="ml-auto px-2 py-0.5 bg-[#16825d] rounded-full text-[11px] font-medium">Ativo</span>
      </div>
    </div>
    <div v-if="cameraAtiva" class="mt-5">
      <div class="w-full aspect-video bg-principal border border-input rounded flex flex-col items-center justify-center gap-3 text-texto-secundario mb-3">
        <span class="text-[32px]">📹</span>
        <span class="text-[13px]">Visualização da câmera</span>
      </div>
      <button @click="desativarCamera" class="w-full px-3 py-2 bg-[#d73a49] border-none text-white text-[13px] font-medium cursor-pointer rounded-sm transition-colors hover:bg-[#c92a3a]">
        Parar Câmera
      </button>
    </div>
  </div>
</template>
