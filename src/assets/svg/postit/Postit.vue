<template>
  <div :class="`d-flex align-items-center justify-content-center ${(!!$slots.default)?'gap-1':''} ${classesDiv}`">
    <div :class="`${(completo)?'':'overflow-x-three-points'} ${classesSegundaDiv}`">
      <component
        v-if="componente"
        :is="componente"
        :tamanho="tamanho"
        :rotate="rotate"
        :estilo="`${estilo}`"
        :ativo="ativo"
        :cor="cor"
        :class="`${(!!$slots.default)?'m-icon':''} ${classesIcone}`"
      />
      <span :class="`${(!!$slots.default)?'d-contents':''} ${classesSpan}`"><slot></slot></span>
    </div>
  </div>
</template>

<script>
  import Postit1 from '@/assets/svg/postit/Postit1.vue';
  import Postit2 from '@/assets/svg/postit/Postit2.vue';
  import Postit3 from '@/assets/svg/postit/Postit3.vue';
  import Postit4 from '@/assets/svg/postit/Postit4.vue';

  export default {
    props: {
      tipo: {
        type: String|Number,
        default: '',
      },
      tamanho: {
        type: Number,
        default: null,
      },
      completo: {
        type: Boolean,
        default: true,
      },
      rotate: {
        type: Number,
        default: 0,
      },
      estilo: {
        type: String,
        default: "",
      },
      ativo: {
        type: Boolean,
        default: false,
      },
      cor: {
        type: String,
        default: '#ffd866',
      },
      classesDiv: {
        type: String,
        default: "",
      },
      classesSegundaDiv: {
        type: String,
        default: "",
      },
      classesSpan: {
        type: String,
        default: "",
      },
      classesIcone: {
        type: String,
        default: "",
      },
    },
    components: {
      Postit1,
      Postit2,
      Postit3,
      Postit4,
    },
    computed: {
      componente() {
        // definir caso queira definir um nome diferente do nome do componente
        switch (this.tipo) {
          case 1: return 'Postit1';
          case 2: return 'Postit2';
          case 3: return 'Postit3';
          case 4: return 'Postit4';
        
          default: return this.tipo;
        }
      }
    }
  };
</script>

<style>
.m-icon {
  margin-right: 4px;
  margin-bottom: 2px;
}
</style>