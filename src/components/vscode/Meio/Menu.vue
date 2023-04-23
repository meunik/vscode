<template>
  <div class="d-flex flex-col justify-content-between menu-vscode w-menu-vscode">
    <div class="d-flex flex-col gap-menu-vscode">
      <router-link
        to="/"
        id="btn_explorador"
        data-toggle="tooltip"
        data-placement="right"
        title="Explorador (Ctrl+Shift+E)"
        class="btn-menu-vscode p-0"
        active-class="active"
        @click.native="navegWidth('explorador')"
      >
        <Icone
          icone="explorador"
          :classesDiv="`justify-content-center h-12 box-icon-menu ${(estaAtiva('explorador')) ? 'ativo' : ''}`"
          :ativo="estaAtiva('explorador')"
        />
      </router-link>
      
      <Icone icone="pesquisa" :classesDiv="'justify-content-center h-12 box-icon-menu'"/>

      <router-link
        to="/controleCodigoFonte"
        id="btn_controleCodigoFonte"
        data-toggle="tooltip"
        data-placement="right"
        title="Controle do Código-Fonte (Ctrl+Shift+G)"
        class="btn-menu-vscode p-0"
        active-class="active"
        @click.native="navegWidth('controleCodigoFonte')"
      >
        <Icone
          icone="git"
          :classesDiv="`justify-content-center h-12 box-icon-menu ${(estaAtiva('controleCodigoFonte')) ? 'ativo' : ''}`"
          :ativo="estaAtiva('controleCodigoFonte')"
        />
      </router-link>

      <router-link
        to="/extensoes"
        id="btn_extensoes"
        data-toggle="tooltip"
        data-placement="right"
        title="Explorador (Ctrl+Shift+E)"
        class="btn-menu-vscode p-0"
        active-class="active"
        @click.native="navegWidth('extensoes')"
      >
        <Icone
          icone="extensoes"
          :classesDiv="`justify-content-center h-12 box-icon-menu ${(estaAtiva('extensoes')) ? 'ativo' : ''}`"
          :ativo="estaAtiva('extensoes')"
        />
      </router-link>

      <!-- <a
        id="btn_setup"
        href="#"
        @click="novaAba('setup')"
        data-toggle="tooltip"
        data-placement="right"
        title="Setup"
        class="btn-menu-vscode text-decoration-none p-0"
      >
        <Icone
          icone="monitor"
          :tamanho="26"
          :classesDiv="`justify-content-center h-12 box-icon-menu ${(estaAtiva('setup')) ? 'ativo' : ''}`"
          :ativo="estaAtiva('setup')"
        />
      </a> -->

      <a
        id="btn_fotos"
        href="#"
        @click="novaAba('fotos')"
        data-toggle="tooltip"
        data-placement="right"
        title="Fotos"
        class="btn-menu-vscode text-decoration-none p-0"
      >
        <Icone
          icone="camera"
          :tamanho="26"
          :classesDiv="`justify-content-center h-12 box-icon-menu ${(estaAtiva('fotos')) ? 'ativo' : ''}`"
          :ativo="estaAtiva('fotos')"
        />
      </a>

      <!-- <Icone icone="monitorRemoto" :classesDiv="'justify-content-center h-12 box-icon-menu'"/> -->
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
        rotaAtiva: this.$route.name
      }
    },
    methods: {
      navegWidth(rota) {
        if ((this.$route.name == this.rotaAtiva)||(this.navegacaoWidth == '0px')) {
          var bodyWidth = document.body.clientWidth;

          if (bodyWidth < 768) {
            this.navegacaoWidth = (this.navegacaoWidth == '0px') ? '100%' : '0px'
          } else {
            this.navegacaoWidth = (this.navegacaoWidth == '0px') ? this.stateNavegacaoWidth : '0px'
          }
        }

        this.rotaAtiva = rota
      },
      estaAtiva(rota) {
        return ((this.navegacaoWidth != '0px')&&(this.$route.name == rota)) ? true : false;
      },
    },
  }
</script>