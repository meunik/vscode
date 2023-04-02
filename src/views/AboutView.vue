<template>
  <div class="about">
    <!-- <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;"> -->
    <Perfil />

    <!-- {{readmePerfil}} -->
    <br>

    <div v-if="readme" v-html="readme" class="p-3"></div>
  </div>
</template>

<script>
  import { Model } from '../components/vscode/Model.js'
  import Perfil from '../components/vscode/github/Perfil'

  export default {
    mixins: [Model],
    components: {
      Perfil,
    }
  }
</script>