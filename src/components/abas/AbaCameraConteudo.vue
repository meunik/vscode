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
  <div class="camera">
    <div class="secao-titulo">DISPOSITIVOS</div>
    <div class="lista-cameras">
      <div
        v-for="camera in cameras"
        :key="camera.id"
        class="camera-item"
        @click="ativarCamera(camera.id)"
      >
        <span class="icone-camera">📹</span>
        <span>{{ camera.nome }}</span>
        <span v-if="camera.ativa" class="badge-ativo">Ativo</span>
      </div>
    </div>
    <div v-if="cameraAtiva" class="preview-camera">
      <div class="preview-placeholder">
        <span>📹</span>
        <span>Visualização da câmera</span>
      </div>
      <button @click="desativarCamera" class="botao-parar">
        Parar Câmera
      </button>
    </div>
  </div>
</template>

<style scoped>
.camera {
  padding: 12px;
  color: #cccccc;
}

.secao-titulo {
  font-size: 11px;
  font-weight: 600;
  color: #858585;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.lista-cameras {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.camera-item {
  padding: 10px 12px;
  background-color: #2d2d30;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s;
}

.camera-item:hover {
  background-color: #3c3c3c;
}

.icone-camera {
  font-size: 16px;
}

.badge-ativo {
  margin-left: auto;
  padding: 2px 8px;
  background-color: #16825d;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
}

.preview-camera {
  margin-top: 20px;
}

.preview-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #1e1e1e;
  border: 1px solid #3c3c3c;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 32px;
  color: #858585;
  margin-bottom: 12px;
}

.preview-placeholder span:last-child {
  font-size: 13px;
}

.botao-parar {
  width: 100%;
  padding: 8px 12px;
  background-color: #d73a49;
  border: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
}

.botao-parar:hover {
  background-color: #c92a3a;
}
</style>
