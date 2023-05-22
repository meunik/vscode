<template>
  <div id="app" class="caixa h-100">
    <Topo />
    <Corpo />
    <Rodape />
  </div>
</template>
<script>

import Topo from './components/vscode/Topo.vue';
import Corpo from './components/vscode/Corpo.vue';
import Rodape from './components/vscode/Rodape.vue';

export default {
  name: 'app',
  components: {
    'Topo': Topo, 
    'Corpo': Corpo, 
    'Rodape': Rodape, 
  },
}
</script>
