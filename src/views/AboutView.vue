<template>
  <div class="about">
    <div class="text-center text-muted">
      Não tem nada aqui
    </div>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  import Perfil from '@/components/vscode/github/Perfil'

  export default {
    mixins: [Model],
    components: {
      Perfil,
    },
  }
</script>