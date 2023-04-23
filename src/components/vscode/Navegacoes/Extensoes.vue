<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">EXTENSÕES</span>
      <Icone icone="tresPontos"/>
    </div>
    <div class="d-flex align-items-center justify-content-center div-pesquisa">
      <input
        type="text"
        class="input-pesquisa"
        placeholder="Pesquisar Extensões no Marketplace"
        @input="filteredName($event)"
      >
    </div>
    <Loader />

    <Pasta
      :aberto="true"
      texto="Instalados"
      class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
      :primeiro="true"
    >
      <a
        v-for="(extend, index) in listagemFiltrada"
        :key="index"
        href="#"
        @click="novaAba('extensoes', extend)"
        :class="`pl-3 link-menu extensoes hover-bg text-decoration-none d-flex align-items-center h-72 ${linkAtivo(extend.displayName)}`"
      >
        <div v-for="(file, fileIndex) in extend.versions[0].files" :key="fileIndex">
          <img
            v-if="file.assetType == 'Microsoft.VisualStudio.Services.Icons.Small'"
            :src="file.source"
            class="icone-extencao"
          >
        </div>
        <div class="d-flex flex-column overflow-x-hidden font-13">
          <div class="overflow-x-three-points">
            <span class="d-contents font-weight-bold hover-branco">{{ extend.displayName }}</span>
          </div>
          <div class="overflow-x-three-points">
            <span class="d-contents hover-normal">{{ extend.shortDescription }}</span>
          </div>
          <span class="hover-normal">
            <font-awesome-icon :icon="['fas', 'certificate']" v-if="extend.publisher.isDomainVerified" style="color: #a6e22e;"/>
            {{ extend.publisher.displayName }}
          </span>
        </div>
      </a>
    </Pasta>
  </nav>
</template>

<script>
  import Perfil from '@/components/vscode/github/Perfil';
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/components/Loader.vue';

  export default {
    mixins: [Model],
    components: {
      Perfil,
      Pasta,
      Icone,
      Loader,
    },
    data() {
      return {
        extensoesFiltrada: [],
      }
    },
    async created() {
      this.carregando = true
      await this.$store.dispatch("VisualStudio/listaExtensoes");
      this.carregando = false
    },
    computed: {
      listagemFiltrada() {
        return (this.extensoesFiltrada.length) ? this.extensoesFiltrada : this.extensoes;
      },
    },
    methods:{
      filteredName(event){
        let valor = event.target.value;
        if (valor) {
          this.extensoesFiltrada = this.extensoes.filter((item)=>{
            return item.displayName.includes(valor);
          });
        } else {
          this.extensoesFiltrada = this.extensoes;
        }
      }
    },
  }
</script>
