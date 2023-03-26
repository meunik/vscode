<template>
  <div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="pasta-button d-flex align-items-center"
        @click="aberto = !aberto"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <Seta :style="`transform: rotate(${(aberto)?90:0}deg);`"/>
        <span class="pasta-texto">{{texto}}</span>
      </button>
    </div>
    <div class="text-left bg-focus-hover" :style="`padding-left: ${paddingSlot+1}rem !important;`">
      <slot v-if="aberto"></slot>
    </div>
  </div>
</template>

<script>
  import Seta from '../../../assets/svg/Seta.vue'
  export default {
    props: {
      aberto: {
        type: Boolean,
        default: false
      },
      texto: {
        type: String,
        default: ''
      },
      nivelIndentacao: {
        type: Number,
        default: 0
      },
      indentacaoSlot: {
        type: Boolean,
        default: false
      },
    },
    components: {
      'Seta': Seta,
    },
    data() {
      return {
        // aberto: false,
      }
    },
    computed: {
      paddingSlot() {
        if (this.indentacaoSlot) return parseInt(this.nivelIndentacao)+0.5;
      }
    }
  }
</script>

<style>
  .pasta-button {
    color: #747474;
    font-size: 13px;
    font-weight: 600;
    border: none;
    background: transparent;
    padding: 2px 0px 2px 0px;
    width: 100%;
    border: 1px solid transparent;
  }
  /* .bg-focus-hover:has(.bg-focus-hover >div>div> .pasta-button:focus), .bg-focus-hover:has(.bg-focus-hover >div>div> .pasta-button:hover) {
    background-color: #a7a7a717;
  } */
  .pasta-button:focus {
    border: 1px solid #4c4c4c;
  }
  .pasta-button:focus, .pasta-button:hover {
    background-color: #a7a7a717;
  }
  .pasta-button:focus > .pasta-texto, .pasta-button:hover > .pasta-texto {
    color: #fff;
  }
</style>