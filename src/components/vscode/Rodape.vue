<template>
  <div class="rodape px-2">
    <Icone icone="github">
      <a href="https://github.com/meunik/vscode" target="_blank" class="links pr-2" style="font-size: 14px;">Github</a>
    </Icone>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js'
  import Icone from '@/assets/svg/Icone.vue'

  export default {
    mixins: [Model],
    components: {
      Icone,
    },
  }
</script>