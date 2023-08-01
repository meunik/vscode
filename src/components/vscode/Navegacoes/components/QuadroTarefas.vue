<template>
  <div :class="`container container-${complemento.id}`" style="cursor: initial;">
    <div :class="`objeto objeto-${complemento.id}`">
      <Postit :tipo="3" :tamanho="150">
        <textarea :class="`textarea-${complemento.id}`" cols="20" rows="10" class="text-black"></textarea>
      </Postit>
    </div>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import { moverDiv } from '@/utils/moverDiv';
  import Postit from '@/assets/svg/postit/Postit.vue';

  export default {
    mixins: [Model],
    components: {
      Postit,
    },
    props: {
      complemento: {
        default: null,
      },
    },
    data() {
      return {
        id: this.complemento.id,
      }
    },
    mounted() {
      moverDiv(this.complemento.id)
    },
  }
</script>

<style>
  textarea {
    background: transparent;
    width:130px;
    height: 130px;
    margin:5px 0;
    padding:3px;
    border: none;
    outline: none;
  }
  textarea::-webkit-scrollbar-track {
    background-color: transparent !important;
  }
  textarea::-webkit-scrollbar {
    width: 3px;
    background-color: transparent !important;
  }
  textarea::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: #0000005e !important;
  }
  textarea::-webkit-resizer {
    background-color: transparent !important;
  }
  textarea::-webkit-scrollbar-corner {
    background-color: transparent !important;
  }

  .square {
    position: relative;
    width: 100px;
    height: 100px;
  }

  /*/////////////////////*/
  .container {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  .objeto {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: transparent;
    cursor: grab;
  }
  .objeto:active, .objeto:active > svg, .objeto:active > svg > rect {
    cursor: grabbing !important;
  }
  .objeto:active ~ .container {
    background: blue;
  }

  @media screen and (max-width: 768px) {
    body {
      -webkit-overflow-scrolling: touch; /* Safari 3.1+ */
      -moz-overflow-scrolling: touch; /* Firefox 2+ */
      -ms-overflow-scrolling: touch; /* IE 10+ */
      overflow-scrolling: touch; /* Standard syntax */
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none; /* Standard syntax */
    }
  }

</style>