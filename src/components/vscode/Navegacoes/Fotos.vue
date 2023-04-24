<template>
  <div class="p-3">
    <Loader class="pb-2"/>
    <Galeria galleryID="my-test-gallery"/>
  </div>
</template>

<script>
  import Galeria from '@/components/vscode/Navegacoes/components/Galeria.vue';
  import { Model } from '@/components/vscode/Model.js';
  import Loader from '@/components/vscode/components/Loader.vue';

  export default {
    mixins: [Model],
    components: {
      Galeria,
      Loader,
    },
    created() {
      this.carregando = true;
    },
  };
</script>
