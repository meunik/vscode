<template>
  <div v-if="carregando" class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  export default {
    mixins: [Model],
  }
</script>
