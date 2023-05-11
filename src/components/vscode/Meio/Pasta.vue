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
        data-toggle="tooltip"
        data-placement="right"
        title="Recolher Pastas no Explorador"
        class="pasta-icon text-text-right collapse-all"
        @click="collapseAll()"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <Icone icone="collapse"/>
      </button>
      <button
        v-if="primeiro && fechaTudo"
        type="button"
        data-toggle="tooltip"
        data-placement="right"
        title="Fechar Tudo"
        class="pasta-icon text-text-right collapse-all"
        @click="fecharTudo()"
        :style="`padding-left: ${nivelIndentacao}rem;`"
      >
        <Icone icone="CloseAll"/>
      </button>
      <span v-if="primeiro && quatidade" class="quatidade-pasta">{{quatidade}}</span>
    </div>
    <div :id="idDivSlot" class="text-left bg-focus-hover scrollbar-edit overflow-y-auto overflow-x-hidden" :style="`padding-left: ${paddingSlot+1}rem !important;`">
      <slot v-if="abrir"></slot>
    </div>
  </div>
</template>

<script>
  import Seta from '@/assets/svg/Seta.vue';
  import Icone from '@/assets/svg/Icone.vue';
  import { breadthFirstSearch } from 'tree-helper';
  import { Model } from '@/components/vscode/Model.js';

  export default {
    mixins: [Model],
    props: {
      primeiro: {
        type: Boolean,
        default: false
      },
      aberto: {
        type: Boolean,
        default: false,
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
      fechaTudo: {
        type: Array,
      },
      quatidade: {
        type: Number,
        default: 0
      },
      idDivSlot: {
        type: String,
        default: ''
      },
    },
    watch: {
      aberto: function(newVal, oldVal) {
        this.abrir = newVal;
      },
    },
    components: {
      Seta,
      Icone,
    },
    data() {
      return {
        abrir: this.aberto,
      }
    },
    computed: {
      paddingSlot() {
        if (this.indentacaoSlot) return parseInt(this.nivelIndentacao)+0.5;
      },
    },
    methods: {
      collapseAll() {
        this.abrir = false
        breadthFirstSearch(this.collapseAllData, node => {
          node.open = false
        })
      },
      fecharTudo() {
        // console.log(this.fechaTudo);
        // this.fechaTudo.forEach((aba, key) => {
        //   this.fecharAba(aba, 0);
        // });
      },
    },
    updated() {
      if (this.idDivSlot == 'editoresAbertos') {
        let main = document.getElementById(this.idDivSlot);
        let divFilha = main.children[0];
        let min = 0;
        
        if (divFilha) {
          min = (divFilha.clientHeight < 200) ? divFilha.clientHeight : 200;
        }

        main.style.height = (this.abrir)?`${min}px`:'0px';
      }
    },
  }
</script>