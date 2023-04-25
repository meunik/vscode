<template>
  <div>
    <div :class="`${(primeiro)?'pasta-primeiro-bloco':''} d-flex align-items-center justify-content-between`">
      <button
        type="button"
        :class="`pasta-${(primeiro)?'primeiro':'button'} d-flex align-items-center white-space-nowrap`"
        @click="abrir = !abrir"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <Seta :style="`transform: rotate(${(abrir)?90:0}deg);`"/>
        <span :class="`pasta-texto overflow-x-three-points ${(primeiro)?'text-uppercase':''}`">{{texto}}</span>
      </button>
      
      <button
        v-if="primeiro && collapseAllData"
        type="button"
        class="pasta-icon text-text-right collapse-all"
        @click="collapseAll()"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <CollapseAll/>
      </button>
      <span v-if="primeiro && quatidade" class="quatidade-pasta">{{quatidade}}</span>
    </div>
    <div class="text-left bg-focus-hover scrollbar-edit overflow-y-auto overflow-x-hidden h-100" :style="`padding-left: ${paddingSlot+1}rem !important;`">
      <slot v-if="abrir"></slot>
    </div>
  </div>
</template>

<script>
  import Seta from '../../../assets/svg/Seta.vue';
  import CollapseAll from '../../../assets/svg/CollapseAll.vue';
  import { breadthFirstSearch } from 'tree-helper';

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
      collapseAllData: {
        type: Array,
      },
      quatidade: {
        type: Number,
        default: 0
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
    },
    methods: {
      collapseAll() {
        this.abrir = false
        breadthFirstSearch(this.collapseAllData, node => {
          node.open = false
        })
      },
    },
    beforeUpdate() {
      this.abrir = this.aberto;
    }
  }
</script>