<template>
  <div class="h-12 d-flex justify-content-center align-items-center">
    <div>
      <svg
        :width="(tamanho)?tamanho:padrao"
        :height="(tamanho)?tamanho:padrao"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        :class="`icone ${(ativo)?'ativo':''}`"
        :style="`transform: rotate(${rotate}deg);${estilo}`"
      >
        <path d="M9 9H4v1h5V9z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z" />
      </svg>
    </div>
    <span class="overflow-x-three-points d-contents"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    tamanho: {
      type: Number,
      default: 16,
    },
    rotate: {
      type: Number,
      default: 0,
    },
    estilo: {
      type: String,
      default: '',
    },
    ativo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      padrao: 16,
    }
  },
};
</script>