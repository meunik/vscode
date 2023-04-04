<template>
  <div class="h-12 d-flex justify-content-center align-items-center box-icon-menu">
    <div class="d-flex">
      <svg
        :width="(tamanho)?tamanho:padrao"
        :height="(tamanho)?tamanho:padrao"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        :class="`icone icone-menu-vscode ${(ativo)?'ativo':''}`"
        :style="`transform: rotate(${rotate}deg);${estilo}`"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
        />
      </svg>
    </div>
    <span class="overflow-x-three-points"><slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    tamanho: {
      type: Number,
      default: 25,
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
      padrao: 25,
    }
  },
};
</script>