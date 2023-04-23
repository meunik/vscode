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
      <Tree class="tree3" :data="menuData" draggable="draggable" cross-tree="cross-tree">
        <div slot-scope="{data, store}" @click="store.toggleOpen(data)" :style="`padding-left: 1rem;`">
          <Icone v-if="data.pasta" :icone="data.icone" :tamanho="16" :rotate="(data.open)?data.rotate:0" :completo="false">{{data.text}}</Icone>
          <a
            v-else
            href="#"
            @click="novaAba(data.tipoAba, data.complemento)"
            :class="`link-menu text-decoration-none ${linkAtivo(data.linkAtivo)}`"
          >
            <Icone :icone="data.icone" :tamanho="16" :rotate="(data.open)?data.rotate:0" :completo="false">{{data.text}}</Icone>
          </a>
        </div>
      </Tree>
    </Pasta>
  </nav>
</template>

<script>
  import { DraggableTree } from "vue-draggable-nested-tree";
  import Perfil from '@/components/vscode/github/Perfil';
  import { Model } from '@/components/vscode/Model.js';
  import Pasta from '@/components/vscode/Meio/Pasta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import Loader from '@/components/vscode/components/Loader.vue';

  export default {
    mixins: [Model],
    components: {
      Tree: DraggableTree,
      Perfil,
      Pasta,
      Icone,
      Loader,
    },
    data() {
      return {
        perf: Perfil,
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
