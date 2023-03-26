<template>
  <div class="h-100 d-flex">
    <Menu />
    <nav class="navegacao py-2">
      <div class="px-3 d-flex align-items-center justify-content-between">
        <span class="explorador">EXPLORADOR</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-more-horizontal"
          data-darkreader-inline-stroke=""
          style="--darkreader-inline-stroke: currentColor"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      </div>

      <Pasta :aberto="true" texto="PORTFÓLIO" class="pt-2">
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

  export default {
    components: {
      'Menu': Menu,
      'Pasta': Pasta,
      'Seta': Seta,
    },
  }
</script>

<style>
  span {
    display: block;
    word-break: break-word;
  }
</style>