<template>
  <div class="about">
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