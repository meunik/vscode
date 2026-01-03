<script setup>
import Icon from '@/assets/icons/Icon.vue'
import { useAbas } from '@/composables/useAbas'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { ref } from 'vue'
import MenuConfiguracoes from '@/components/MenuConfiguracoes.vue'
import SeletorTemas from '@/components/SeletorTemas.vue'

const { abaAtiva, alternarAba, fecharAba } = useAbas()
const { adicionarAba } = useEditorAbas()
const menuAberto = ref(false)
const seletorTemasAberto = ref(false)

const abas = [
  { nome: 'explorador', icone: 'explorador', acao: 'alternarAba' },
  { nome: 'pesquisa', icone: 'pesquisa', acao: 'alternarAba' },
  { nome: 'git', icone: 'git', acao: 'alternarAba' },
  { nome: 'extensoes', icone: 'extensoes', acao: 'alternarAba' },
  { 
    nome: 'camera', 
    icone: 'camera', 
    acao: 'abrirComponente',
    dadosAba: {
      titulo: 'Fotos',
      caminho: '',
      tipo: 'componente',
      id: 'fotos',
      opcoes: {
        componente: 'Fotos',
        icone: {
          tipo: 'icon',
          valor: 'camera'
        }
      }
    }
  },
]

const handleClickAba = (aba) => {
  if (aba.acao === 'alternarAba') alternarAba(aba.nome)
  if (aba.acao === 'abrirComponente') {
    fecharAba()
    const { titulo, caminho, tipo, id, opcoes } = aba.dadosAba
    adicionarAba(titulo, caminho, tipo, id, opcoes)
  }
}

const alternarMenu = () => menuAberto.value = !menuAberto.value
const fecharMenu = () => menuAberto.value = false
const abrirSeletorTemas = () => seletorTemasAberto.value = true
const fecharSeletorTemas = () => seletorTemasAberto.value = false
const abrirEditorCurriculo = () => {
  fecharAba()
  adicionarAba('Editor de Currículo', '', 'componente', 'curriculo-editor', {
    componente: 'curriculo/editor/EditorCurriculoConteudo',
    icone: {
      tipo: 'uicon',
      valor: 'line-md:file-document-filled'
    }
  })
}
</script>

<template>
  <div class="flex flex-col justify-between w-12 h-full bg-navbar border-r border-borda-principal">
    <div class="flex-1 flex flex-col">
      <button
        v-for="aba in abas"
        :key="aba.nome"
        @click="handleClickAba(aba)"
        class="flex items-center justify-center h-12 w-full cursor-pointer transition-colors hover:text-icone-hover text-lg"
        :class="[
          (aba.acao === 'alternarAba' && abaAtiva === aba.nome) ? 'text-icone-ativo border-x-2 border-l-navbar-borda-ativa border-r-transparent' : 'border-x-2 border-x-transparent text-icone-normal'
        ]"
        :title="aba.nome"
      >
        <Icon :name="aba.icone" :size="24" />
      </button>
    </div>
    <!-- <div class="flex flex-col">
      <button
        @click="abrirEditorCurriculo"
        class="flex items-center justify-center h-12 w-full cursor-pointer transition-colors hover:text-icone-hover text-lg border-x-2 border-x-transparent text-icone-normal"
        title="Editar Currículo"
      >
        <UIcon name="line-md:file-document-filled" class="text-[24px]" />
      </button>
    </div> -->
    <div class="relative">
      <button
        class="botao-configuracoes flex items-center justify-center h-12 w-full cursor-pointer transition-colors hover:text-icone-hover text-lg"
        :class="[
          menuAberto ? 'text-icone-ativo border-x-2 border-l-navbar-borda-ativa border-r-transparent' : 'border-x-2 border-x-transparent text-icone-normal'
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