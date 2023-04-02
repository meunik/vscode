<template>
  <div class="about">
    <!-- <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;"> -->
    <div v-html="readmePerfil" class="p-3"></div>

    <img src="https://github.com/meunik/meunik/raw/output/github-contribution-grid-snake.svg" alt="Snake animation" style="max-width: 100%;">

    <!-- {{readmePerfil}} -->
    <br>
    
    <div v-html="readme" class="p-3"></div>
  </div>
</template>

<script>
  import { Model } from '../components/vscode/Model.js'

  export default {
    mixins: [Model],
  }
</script>