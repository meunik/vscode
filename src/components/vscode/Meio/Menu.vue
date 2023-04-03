<template>
  <div class="d-flex flex-col justify-content-between menu-vscode w-menu-vscode">
    <div class="d-flex flex-col gap-menu-vscode">
      <Icone icone="explorador"/>
      <Icone icone="pesquisa"/>
      <Icone icone="git"/>
      <Icone icone="debug"/>
      <Icone icone="extensoes"/>
      <Icone icone="monitor"/>

    </div>
    <div class="d-flex flex-col align-items-center gap-menu-vscode">
      <Icone icone="user"/>
      <Icone icone="engrenaguem"/>
    </div>
  </div>
</template>
<script>

import Icone from '@/assets/svg/Icone.vue'

export default {
  components: {
    Icone,
  }
}
</script>