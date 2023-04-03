<template>
  <div class="main" id="main">
    <Menu />
    <nav id="drag-left" class="navegacao py-2 d-flex flex-column" :style="{width: navegacaoWidth}">
      <div class="px-3 d-flex align-items-center justify-content-between">
        <span class="explorador">EXPLORADOR</span>
        <TresPontos />
      </div>

      <Pasta
        :aberto="true"
        texto="Diretório"
        class="pt-2 overflow-y-auto overflow-x-hidden d-flex flex-column"
        :primeiro="true"
      >
        <Pasta :aberto="true" texto="Github" :nivelIndentacao="1">
          <Pasta :aberto="true" texto="Perfil" :nivelIndentacao="2" :indentacaoSlot="true">
            
            <router-link to="/">
              <GithubInverted>{{(!!perfil)?`${perfil.login}`:''}}</GithubInverted>
            </router-link>
          </Pasta>
          <Pasta :aberto="false" texto="Repositórios" :nivelIndentacao="2" :indentacaoSlot="true">
            <!-- <span v-for="(repo, index) in repositorios" :key="index">
              <router-link
                v-if="repo.language"
                @click.native="buscaReadme(repo.name)"
                to="/about"
                class="link-menu"
              >
                <GithubInverted>{{`${repo.language} - ${repo.name}`}}</GithubInverted>
              </router-link>
            </span> -->
          </Pasta>
        </Pasta>
      </Pasta>
    </nav>
    <div class="dragbar" id="dragbar"></div>
    <router-view id="drag-right" class="conteudo scrollbar-edit overflow-auto flex-1" />
  </div>
</template>

<script>
  import Menu from './Meio/Menu.vue';
  import Pasta from './Meio/Pasta.vue';
  import Seta from '../../assets/svg/Seta.vue';
  import TresPontos from '../../assets/svg/TresPontos.vue';
  import GithubInverted from '../../assets/svg/GithubInverted.vue';
  import { dragbar } from '../../utils/dragbar.js'

  import { Model } from './Model.js'

  export default {
    mixins: [Model],
    components: {
      'Menu': Menu,
      'Pasta': Pasta,
      'Seta': Seta,
      'TresPontos': TresPontos,
      'GithubInverted': GithubInverted,
    },
    async created() {
      await this.$store.dispatch("Git/buscaRepositorios");
      // console.log(this.repositorios);
    },
    mounted() {
      dragbar()
    },
    methods: {
      async buscaReadme(projeto) {
        console.log(projeto);
        if (!!projeto) await this.$store.dispatch("Git/buscaReadme", projeto);
      }
    }
  }
</script>

<style>
  span {
    display: block;
    word-break: break-word;
  }

  [class^=panel] {
    padding: 60px 24px;
    background-color: transparent;
  }

  .dragbar {
    position: initial !important;
    padding: 1px;
    cursor: col-resize;
    background-color: #242424;
    transition: 0.5s;
  }
  .dragbar:hover {
    padding: 2px;
    background-color: #818181;
    transition: 1s;
  }
</style>