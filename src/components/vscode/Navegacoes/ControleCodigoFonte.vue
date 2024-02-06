<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">CONTROLE DO CÓDIGO-FONTE</span>
      <Icone icone="tresPontos"/>
    </div>
    <Loader />

    <Pasta
      :aberto="true"
      texto="Github"
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
      this.navegacaoWidth = '250px';
      this.navegacaoWidthMin = null;

      let githubMenu = [];
      if (this.repositorios) {
        this.repositorios.forEach(repo => {
          if (repo) {
            githubMenu.push({
              text: `${(repo.language)?repo.language+' - ':''}${repo.name}`,
              icone: 'github',
              rotate: 0,
              tipoAba: 'explorador',
              linkAtivo: `${repo.name}`,
              complemento: repo,
            })
          }
        });
      }
      this.menuData = [
        {
          text: 'Perfil',
          icone: 'seta',
          pasta: true,
          rotate: 90,
          droppable: false,
          children: [
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
          text: 'Repositórios Público',
          icone: 'seta',
          pasta: true,
          rotate: 90,
          children: githubMenu
        },
      ];
    },
  }
</script>
