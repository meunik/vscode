<template>
  <Tree class="tree3" :data="menuData" draggable="draggable" cross-tree="cross-tree">
    <div
      slot-scope="{data, store}"
      @click="store.toggleOpen(data)"
      :class="`pl-3 ${classe}`"
      :style="` ${estilo}`"
      @mouseover="hover = `hover-${data.linkAtivo}`" @mouseleave="hover = null"
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
        :id="`link-${data.identificador}`"
        href="#"
        @click="novaAba(data.tipoAba, data.complemento)"
        :class="`link-menu text-decoration-none ${linkAtivo(data.linkAtivo)} ${ativoExplorador} ${data.classe}`"
      >
        <Icone :icone="data.icone" :tamanho="16" :rotate="(data.open)?data.rotate:0" :completo="false">
          {{data.text}}
          <a
            v-if="(data.icone == 'github')"
            @click.stop="link"
            :href="`https://github.com/meunik/${data.linkAtivo}`"
            target="_blank"
            class="links-github pr-2"
            :class="{ 'hovered': (hover == `hover-${data.linkAtivo}`) }"
            style="font-size: 14px;"
          >
            <font-awesome-icon :icon="['fas', 'link']" />
          </a>
        </Icone>
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
      explorador: {
        type: Boolean,
        default: false,
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
        hover: null
      }
    },
    computed: {
      link(event) {},
      menuData() {
        return this.dados;
      },
      ativoExplorador() {
        return ((this.explorador)&&(this.menuData.length == 1))?'ativo':'';
      }
    },
  }
</script>
