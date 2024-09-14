<template>
  <nav>
    <div class="px-3 d-flex align-items-center justify-content-between">
      <span class="explorador">EXPLORADOR</span>
      <Icone icone="tresPontos"/>
    </div>
    <Loader />

    <div class="d-flex flex-column">
      <Pasta
        id="editoresAbertosPasta"
        idDivSlot="editoresAbertos"
        :aberto="(editAbertos.length)?true:false"
        texto="Editores Abertos"
        class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
        :primeiro="true"
        :fechaTudo="editAbertos"
      >
        <Arquivos :dados="editAbertos" :explorador="true" estilo="padding-left: 33px !important;"/>
      </Pasta>
      <div class="dragbar-vertical" id="dragbarVertical"></div>
      <Pasta
        :aberto="true"
        texto="Diretório"
        class="overflow-y-auto overflow-x-hidden d-flex flex-column"
        :primeiro="true"
        :collapseAllData="menuData"
      >
        <Arquivos :dados="menuData"/>
      </Pasta>
    </div>

  </nav>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/components/Loader.vue';
  import Arquivos from "@/components/vscode/Meio/Arquivos.vue";
  import { dragbarVertical } from '@/utils/dragbar.js';

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
        menuData: [],
      }
    },
    async created() {
      await this.$store.dispatch("Git/buscaRepositorios");

      let curriculo = window.location.href.includes("/curriculo");
      if (curriculo) this.novaAba('curriculo', null);
      this.navegacaoWidth = (curriculo || (document.body.clientWidth < 768)) ? '0px' : '250px';
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
              icone: 'notas',
              classe: 'link-laranja',
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
            // {
            //   text: 'Editor',
            //   icone: 'texto',
            //   rotate: 0,
            //   tipoAba: 'editor',
            //   linkAtivo: 'editor',
            //   complemento: null,
            // },
          ]
        },
      ];
    },
    mounted() {
      dragbarVertical()
    },
    beforeUpdate() { 
      var editoresAbertos = document.getElementById('editoresAbertos');
      if (editoresAbertos.clientHeight > 200) {
        editoresAbertos.style.height = `200px`;
      }
    },
  }
</script>
