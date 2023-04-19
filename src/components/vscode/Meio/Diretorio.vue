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
        <CollapseAll/>
      </button>
    </div>
    <div class="text-left bg-focus-hover" :style="`padding-left: ${paddingSlot+1}rem !important;`">
      <slot v-if="abrir"></slot>
    </div>
  </div>
</template>

<script>
  import Seta from '../../../assets/svg/Seta.vue'
  import CollapseAll from '../../../assets/svg/CollapseAll.vue'
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
      'CollapseAll': CollapseAll,
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