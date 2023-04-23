<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">EXPLORADOR</span>
      <Icone icone="tresPontos"/>
    </div>
    <Loader />

    <Pasta
      :aberto="true"
      texto="Diretório"
      class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
      :primeiro="true"
      :collapseAllData="menuData"
    >
      <Arquivos :dados="menuData"/>
    </Pasta>
  </nav>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/components/Loader.vue';
  import Arquivos from "@/components/vscode/Meio/Arquivos.vue";

  export default {
    mixins: [Model],
    components: {
      Pasta,
      Icone,
      Loader,
      Arquivos,
    },
    data() {
      return {
        menuData: []
      }
    },
    async created() {
      await this.$store.dispatch("Git/buscaRepositorios");

      let githubMenu = [];
      this.repositorios.forEach(repo => {
        if (repo && repo.language) {
          githubMenu.push({
            text: `${repo.language} - ${repo.name}`,
            icone: 'github',
            rotate: 0,
            tipoAba: 'explorador',
            linkAtivo: `${repo.name}`,
            complemento: repo,
          })
        }
      });
      this.menuData = [
        {
          text: 'Profissional',
          icone: 'seta',
          pasta: true,
          rotate: 90,
          children: [
            {
              text: 'github',
              icone: 'seta',
              pasta: true,
              open: false,
              rotate: 90,
              children: githubMenu
            },
            {
              text: 'Currículo',
              icone: 'github',
              rotate: 0,
              tipoAba: 'curriculo',
              linkAtivo: 'curriculo',
              complemento: null,
            },
          ]
        },
        {
          text: 'Pessoal',
          icone: 'seta',
          pasta: true,
          rotate: 90,
          droppable: false,
          children: [
            {
              text: 'Setup',
              icone: 'monitor',
              rotate: 0,
              tipoAba: 'setup',
              linkAtivo: 'setup',
              complemento: null,
            },
            {
              text: 'Fotos',
              icone: 'camera',
              rotate: 0,
              tipoAba: 'fotos',
              linkAtivo: 'fotos',
              complemento: null,
            },
          ]
        },
      ];
    },
  }
</script>
