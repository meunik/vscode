<script setup>
import Icon from '@/assets/icons/Icon.vue'
import { useAbas } from '@/composables/useAbas'
import { ref } from 'vue'
import MenuConfiguracoes from './MenuConfiguracoes.vue'
import SeletorTemas from './SeletorTemas.vue'

const { abaAtiva, alternarAba } = useAbas()
const menuAberto = ref(false)
const seletorTemasAberto = ref(false)

const abas = [
  { nome: 'explorador', icone: 'explorador' },
  { nome: 'pesquisa', icone: 'pesquisa' },
  { nome: 'git', icone: 'git' },
  { nome: 'extensoes', icone: 'extensoes' },
  { nome: 'camera', icone: 'camera' },
]

const alternarMenu = () => {
  menuAberto.value = !menuAberto.value
}

const fecharMenu = () => {
  menuAberto.value = false
}

const abrirSeletorTemas = () => {
  seletorTemasAberto.value = true
}

const fecharSeletorTemas = () => {
  seletorTemasAberto.value = false
}
</script>

<template>
  <div class="flex flex-col justify-between w-12 h-full bg-navbar border-r border-borda-principal">
    <div class="flex-1 flex flex-col">
      <button
        v-for="aba in abas"
        :key="aba.nome"
        @click="alternarAba(aba.nome)"
        class="flex items-center justify-center h-12 w-full bg-transparent border-none border-l-2 cursor-pointer transition-colors text-icone-normal hover:text-icone-hover text-lg"
        :class="[
          abaAtiva === aba.nome ? 'text-icone-ativo border-l-navbar-borda-ativa' : 'border-l-transparent'
        ]"
        :title="aba.nome"
      >
        <Icon :name="aba.icone" :size="24" />
      </button>
    </div>
    <div class="relative">
      <button
        class="botao-configuracoes flex items-center justify-center h-12 w-full bg-transparent border-none border-l-2 cursor-pointer transition-colors text-lg text-icone-normal"
        :class="[
          menuAberto ? 'text-icone-ativo border-l-navbar-borda-ativa' : 'text-icone-normal hover:text-icone-hover border-l-transparent'
        ]"
        @click="alternarMenu"
        title="Configurações"
      >
        <Icon name="engrenagem" :size="24" />
      </button>
      <MenuConfiguracoes :aberto="menuAberto" @fechar="fecharMenu" @abrir-seletor-temas="abrirSeletorTemas" />
    </div>
    <SeletorTemas v-if="seletorTemasAberto" @fechar="fecharSeletorTemas" />
  </div>
</template>