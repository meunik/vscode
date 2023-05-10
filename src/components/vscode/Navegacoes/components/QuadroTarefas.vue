<template>
  <div class="container">
    <div class="circle">
      <svg class="testeSvg" viewBox="0 0 150 150" fill="currentColor">
        <rect x="0" y="0" width="150" height="150" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000">Texto no Centro</text>
      </svg>
    </div>
  </div>
</template>

<script>
  import { Model } from '@/components/vscode/Model.js';
  import { moverDiv2 } from '@/utils/moverDiv';
  import Postit from '@/assets/svg/postit/Postit.vue';

  export default {
    mixins: [Model],
    components: {
      Postit,
    },
    mounted() {
      moverDiv2()
    },
  }
</script>

<style>
  .square {
    position: relative;
    width: 100px;
    height: 100px;
  }

  /* .testeSvg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    color: #fff;
  } */

  /*/////////////////////*/
  .container {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  .circle {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f1ecec;
    cursor: grab;
  }
  .circle:active, .circle:active > svg, .circle:active > svg > rect {
    cursor: grabbing !important;
  }
  .circle:active ~ .container {
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