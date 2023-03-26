<template>
  <div class="h-100 d-flex">
    <Menu />
    <nav class="navegacao py-2">
      <div class="px-3 d-flex align-items-center justify-content-between">
        <span class="explorador">EXPLORADOR</span>
        <TresPontos />
      </div>

      <Pasta :aberto="true" texto="PORTFÓLIO" class="pt-2" :primeiro="true">
        <Pasta :aberto="false" texto="Portfólios" :nivelIndentacao="1">
          <Pasta texto="Laravel" :nivelIndentacao="2" :indentacaoSlot="true">
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
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
    <router-view class="conteudo vh-fixo scrollbar-edit position-relative overflow-auto" />
  </div>
</template>

<script>
  import Menu from './Meio/Menu.vue';
  import Pasta from './Meio/Pasta.vue';
  import Seta from '../../assets/svg/Seta.vue';
  import TresPontos from '../../assets/svg/TresPontos.vue';

  export default {
    components: {
      'Menu': Menu,
      'Pasta': Pasta,
      'Seta': Seta,
      'TresPontos': TresPontos,
    },
  }
</script>

<style>
  span {
    display: block;
    word-break: break-word;
  }
</style>