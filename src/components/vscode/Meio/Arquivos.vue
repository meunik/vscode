<template>
  <Tree class="tree3" :data="menuData" draggable="draggable" cross-tree="cross-tree">
    <div
      slot-scope="{data, store}"
      @click="store.toggleOpen(data)"
      :class="`pl-3 ${classe}`"
      :style="` ${estilo}`"
    >
      <Icone
        v-if="data.pasta"
        :icone="data.icone"
        :tamanho="16"
        :rotate="(data.open)?data.rotate:0"
        classesSegundaDiv="d-flex align-items-center"
        estilo="margin: 0px !important;"
      ><Icone :icone="(data.open)?'pastaAberta':'pasta'" :tamanho="16">{{data.text}}</Icone></Icone>
      <a
        v-else
        href="#"
        @click="novaAba(data.tipoAba, data.complemento)"
        :class="`link-menu text-decoration-none ${linkAtivo(data.linkAtivo)} ${data.classe}`"
      >
        <Icone :icone="data.icone" :tamanho="16" :rotate="(data.open)?data.rotate:0" :completo="false">{{data.text}}</Icone>
      </a>
    </div>
  </Tree>
</template>

<script>
  import { DraggableTree } from "vue-draggable-nested-tree";
  import { Model } from '@/components/vscode/Model.js';
  import Perfil from '@/components/vscode/github/Perfil';
  import Icone from '@/assets/svg/Icone.vue';

  export default {
    mixins: [Model],
    props: {
      dados: {
        type: Array,
      },
      classe: {
        type: String,
        default:''
      },
      estilo: {
        type: String,
        default:''
      },
    },
    components: {
      Tree: DraggableTree,
      Perfil,
      Icone,
    },
    data() {
      return {
        perf: Perfil,
      }
    },
    computed: {
      menuData() {
        return this.dados;
      }
    },
  }
</script>
