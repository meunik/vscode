<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">TAREFAS</span>
      <Icone icone="tresPontos"/>
    </div>
    <b-calendar
      block
      class="p-2"
      @selected="selected"
    ></b-calendar>
  </nav>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/components/Loader.vue';

  export default {
    mixins: [Model],
    components: {
      Icone,
      Loader,
    },
    created() {
      this.navegacaoWidth = '270px';
      this.navegacaoWidthMin = 266;
    },
    methods: {
      selected(ymd, date) {
        let nome = `Terefa ${this.$moment(ymd).format('DD/MM/YYYY')}`;
        console.log(nome);
        this.novaAba('quadroTarefas', nome)
      }
    },
  }
</script>
