<template>
  <div class="main" id="main">
    <Menu />
    <router-view id="drag-left" class="navegacao pt-2 pb-0 d-flex flex-column noPrint" :style="{width: navegacaoWidth}" />
    <div class="dragbar" id="dragbar"></div>
    <Conteudo id="drag-right" class="conteudo scrollbar-edit overflow-hidden flex-1" />
  </div>
</template>

<script>
  import {Model} from './Model.js';
  import Menu from '@/components/vscode/Meio/Menu.vue';
  import Conteudo from '@/components/vscode/Conteudo.vue';
  import {dragbar} from '@/utils/dragbar.js';
  import {buscaExtensoes} from '@/utils/buscaExtensoes.js';

  export default {
    mixins: [Model],
    components: {
      Menu,
      Conteudo,
    },
    async created() {
      await this.$store.dispatch("Git/buscaRepositorios");
    },
    mounted() {
      dragbar()
      if (document.body.clientWidth < 768) this.navegacaoWidth = '0px';
    },
    methods: {
      async buscaReadme(projeto) {
        if (!!projeto) await this.$store.dispatch("Git/buscaReadme", projeto);
      }
    }
  }
</script>