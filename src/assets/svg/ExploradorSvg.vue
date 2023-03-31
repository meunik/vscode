<template>
  <div :class="`h-12 d-flex justify-content-center align-items-center box-icon-menu ${(navegacaoWidth == '0px') ? '' : 'ativo'}`">
    <button  data-toggle="tooltip" data-placement="right" title="Explorador (Ctrl+Shift+E)" type="button" class="btn-menu-vscode" @click="navegacaoWidth = (navegacaoWidth == '0px') ? stateNavegacaoWidth : '0px'">
      <svg
        :width="tamanho"
        :height="tamanho"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        :class="`icone-menu-vscode ${(navegacaoWidth == '0px') ? '' : 'ativo'}`"
      >
        <path
          d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
  import { Model } from '../../components/vscode/Model.js'
  export default {
    mixins: [Model],
    props: {
      tamanho: {
        type: Number,
        default: 25
      },
    },
    data() {
      return {
        stateNavegacaoWidth: this.$store.state.Utils.navegacaoWidth,
      }
    },
  }
</script>