<template>
  <b-row class="m-0">
    <b-col cols="12" md="4" class="d-flex align-items-center justify-content-center p-3">
      <img v-if="perfil.avatar_url" :src="perfil.avatar_url" alt="Foto de Perfil do GitHub" class="avatar-user">
    </b-col>
    <b-col cols="12" md="8" class="p-0">
      <div v-html="readmePerfil" class="p-3"></div>
      <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;">
    </b-col>
  </b-row>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  export default {
    mixins: [Model],
    async created() {
      await this.$store.dispatch("Git/buscaPerfil");
      await this.$store.dispatch("Git/buscaReadmePerfil");
      console.log(this.perfil);
    },
  }
</script>

<style>
  .avatar-user {
    border-radius: 50% !important;
    width: 100%;
    border: 1px solid #7a7164 !important;
    box-shadow: 0 0 0 1px rgba(29, 32, 33, 0.1);
  }
</style>