<script setup>
import Icon from '@/assets/icons/Icon.vue'
import { useAbas } from '@/composables/useAbas'

const { abaAtiva, alternarAba } = useAbas()

const abas = [
  { nome: 'explorador', icone: 'explorador' },
  { nome: 'pesquisa', icone: 'pesquisa' },
  { nome: 'git', icone: 'git' },
  { nome: 'extensoes', icone: 'extensoes' },
  { nome: 'camera', icone: 'camera' }
]
</script>

<template>
  <div class="navbar">
    <button
      v-for="aba in abas"
      :key="aba.nome"
      @click="alternarAba(aba.nome)"
      :class="['navbar-item', { ativo: abaAtiva === aba.nome }]"
      :title="aba.nome"
    >
      <Icon :name="aba.icone" :size="24" />
    </button>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 100%;
  background-color: #333;
  border-right: 1px solid #252525;
}

.navbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  background: none;
  border: none;
  border-left: 2px solid transparent;
  color: #858585;
  cursor: pointer;
  transition: color 0.2s;
}

.navbar-item:hover {
  color: #cccccc;
}

.navbar-item.ativo {
  color: #ffffff;
  border-left-color: #007acc;
}
</style>