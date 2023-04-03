<template>
  <div class="home">
    <Perfil v-if="!!perfil" />
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld.vue'
  import Perfil from '@/components/vscode/github/Perfil'
  import { Model } from '@/components/vscode/Model.js'

  export default {
    mixins: [Model],
    name: 'HomeView',
    components: {
      Perfil,
      HelloWorld
    }
  }
</script>
