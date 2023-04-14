<template>
  <svg
    :width="(tamanho)?tamanho:padrao"
    :height="(tamanho)?tamanho:padrao"
    viewBox="0 0 16 16"
    version="1.1"
    aria-hidden="true"
    :class="`icone ${ativo ? 'ativo' : ''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <path
      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"
    ></path>
  </svg>
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
      default: "",
    },
    ativo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      padrao: 16,
    };
  },
};
</script>