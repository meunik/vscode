<template>
  <div id="app" class="caixa h-100">
    <Topo />
    <Meio />
    <Rodape />
  </div>
</template>
<script>

import Topo from './components/vscode/Topo.vue';
import Meio from './components/vscode/Meio.vue';
import Rodape from './components/vscode/Rodape.vue';

export default {
  name: 'app',
  components: {
    'Topo': Topo, 
    'Meio': Meio, 
    'Rodape': Rodape, 
  },
}
</script>
