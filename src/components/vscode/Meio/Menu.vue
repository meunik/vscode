<template>
  <div class="d-flex flex-col justify-content-between menu-vscode w-menu-vscode">
    <div class="d-flex flex-col gap-menu-vscode">
      <button  data-toggle="tooltip" data-placement="right" title="Explorador (Ctrl+Shift+E)" type="button" class="btn-menu-vscode p-0" @click="navegWidth(navegacaoWidth)">
        <Icone icone="explorador" :classesDiv="`justify-content-center h-12 box-icon-menu ${(navegacaoWidth == '0px') ? '' : 'ativo'}`" :ativo="(navegacaoWidth != '0px')?true:false"/>
      </button>
      <Icone icone="pesquisa" :classesDiv="'justify-content-center h-12 box-icon-menu'"/>
      <Icone icone="git" :classesDiv="'justify-content-center h-12 box-icon-menu'"/>
      <Icone icone="debug" :classesDiv="'justify-content-center h-12 box-icon-menu'"/>
      <Icone icone="extensoes" :classesDiv="'justify-content-center h-12 box-icon-menu'"/>
      <Icone icone="monitor" :classesDiv="'justify-content-center h-12 box-icon-menu'"/>

    </div>
    <div class="d-flex flex-col align-items-center gap-menu-vscode">
      <Icone icone="user" class="justify-content-center h-12 box-icon-menu"/>
      <Icone icone="engrenaguem" class="justify-content-center h-12 box-icon-menu"/>
    </div>
  </div>
</template>

<script>
  import Icone from '@/assets/svg/Icone.vue'
  import { Model } from '@/components/vscode/Model.js'

  export default {
    mixins: [Model],
    components: {
      Icone,
    },
    data() {
      return {
        padrao: 25,
        stateNavegacaoWidth: this.$store.state.Utils.navegacaoWidth,
      }
    },
    methods: {
      navegWidth(tamanho) {
        var bodyWidth = document.body.clientWidth;

        if (bodyWidth < 768) {
          this.navegacaoWidth = (this.navegacaoWidth == '0px') ? '100%' : '0px'
        } else {
          this.navegacaoWidth = (this.navegacaoWidth == '0px') ? this.stateNavegacaoWidth : '0px'
        }
      }
    },
  }
</script>