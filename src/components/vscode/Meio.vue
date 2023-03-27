<template>
  <div class="main">
    <Menu />
    <nav class="navegacao py-2 d-flex flex-column">
      <div class="px-3 d-flex align-items-center justify-content-between">
        <span class="explorador">EXPLORADOR</span>
        <TresPontos />
      </div>

      <Pasta
        :aberto="true"
        texto="PORTFÓLIO"
        class="pt-2 overflow-auto d-flex flex-column"
        :primeiro="true"
      >
        <Pasta :aberto="true" texto="Portfólios" :nivelIndentacao="1">
          <Pasta :aberto="true" texto="Laravel" :nivelIndentacao="2" :indentacaoSlot="true">
            <span v-for="(repo, index) in repositorios" :key="index">
              <GithubInverted>{{repo.full_name}}</GithubInverted>
            </span>
          </Pasta>
          <Pasta texto="Vue" :nivelIndentacao="2" :indentacaoSlot="true">
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
          </Pasta>
        </Pasta>
      </Pasta>

      <br>

      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">teste</router-link>
    </nav>
    <router-view class="conteudo scrollbar-edit overflow-auto" />
  </div>
</template>

<script>
  import Menu from './Meio/Menu.vue';
  import Pasta from './Meio/Pasta.vue';
  import Seta from '../../assets/svg/Seta.vue';
  import TresPontos from '../../assets/svg/TresPontos.vue';
  import GithubInverted from '../../assets/svg/GithubInverted.vue';

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
      await this.$store.dispatch("buscaRepositorios");
    },
  }
</script>

<style>
  span {
    display: block;
    word-break: break-word;
  }
</style>