<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">EXTENSÕES</span>
      <Icone icone="tresPontos"/>
    </div>

    <Pasta
      :aberto="true"
      texto="Instalados"
      class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
      :primeiro="true"
    >
      <a
        v-for="(extend, index) in extensoes"
        :key="index"
        href="#"
        @click="novaAba(extend)"
        class="pl-1 link-menu text-decoration-none d-flex align-items-center"
      >
        <div v-for="(file, fileIndex) in extend.versions[0].files" :key="fileIndex">
          <img
            v-if="file.assetType == 'Microsoft.VisualStudio.Services.Icons.Small'"
            :src="file.source"
            class="icone-extencao"
          >
        </div>
        <span>{{ extend.displayName }}</span>
      </a>
    </Pasta>
  </nav>
</template>

<script>
  import Perfil from '@/components/vscode/github/Perfil';
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';

  export default {
    mixins: [Model],
    components: {
      Perfil,
      Pasta,
      Icone,
    },
    async created() {
      await this.$store.dispatch("VisualStudio/listaExtensoes");
    },
  }
</script>

<style>
  .icone-extencao {
    width: 42px;
    height: 42px;
    padding-right: 14px;
    flex-shrink: 0;
    object-fit: contain;
  }
</style>
