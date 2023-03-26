<template>
  <div>
    <div class="pasta-primeiro-bloco d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="pasta-primeiro d-flex align-items-center"
        @click="abrir = !abrir"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <Seta :style="`transform: rotate(${(abrir)?90:0}deg);`"/>
        <span class="pasta-texto">{{texto}}</span>
      </button>
      
      <button
        type="button"
        class="pasta-icon text-text-right collapse-all"
        @click="abrir = false"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <Collapse-all/>
      </button>
    </div>
    <div class="text-left bg-focus-hover" :style="`padding-left: ${paddingSlot+1}rem !important;`">
      <slot v-if="abrir"></slot>
    </div>
  </div>
</template>

<script>
  import Seta from '../../../assets/svg/Seta.vue'
  import CollapseAll from '../../../assets/svg/Collapse-all.vue'
  export default {
    props: {
      primeiro: {
        type: Boolean,
        default: false
      },
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
      'Collapse-all': CollapseAll,
    },
    data() {
      return {
        abrir: this.aberto,
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
  .pasta-button, .pasta-primeiro, .pasta-icon {
    color: #747474;
    font-size: 13px;
    font-weight: 600;
    border: none;
    background: transparent;
    padding: 2px 0px 2px 0px;
    width: 100%;
    border: 1px solid transparent;
  }
  .pasta-primeiro-bloco {
    border: 1px solid transparent;
  }
  .pasta-button:focus, .pasta-primeiro-bloco:has(button.pasta-primeiro:focus)  {
    border: 1px solid #4c4c4c;
  }
  .pasta-button:focus, .pasta-button:hover, .pasta-icon:hover {
    background-color: #a7a7a717;
  }
  .pasta-button:focus > .pasta-texto, .pasta-button:hover > .pasta-texto {
    color: #fff;
  }

  .collapse-all {
    padding: 1.2px 1px 1px 1.2px;
    width: inherit;
    border-radius: 5px;
    margin-right: 4px;
  }
</style>