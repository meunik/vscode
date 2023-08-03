<template>
  <svg
    :width="(tamanho)?tamanho:padrao"
    :height="(tamanho)?tamanho:padrao"
    viewBox="0 0 119 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="`icone icone-menu-vscode ${(ativo)?'ativo':''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <path
      d="M2.44036 2.68904C0.936022 4.22654 0.0654297 6.62029 0.0654297 9.72029V120.295C0.0654297 123.395 0.936022 125.789 2.44036 127.327L2.81165 127.664L66.2755 65.7266V64.2641L2.81165 2.32655L2.44036 2.68904Z"
      fill="url(#paint0_linear_1128_6836)" />
    <path
      d="M87.4046 86.3848L66.2734 65.7285V64.266L87.4302 43.6098L87.9039 43.8785L112.959 57.7973C120.11 61.7473 120.11 68.2473 112.959 72.2223L87.9039 86.116L87.4046 86.3848V86.3848Z"
      fill="url(#paint1_linear_1128_6836)" />
    <path
      d="M87.9051 86.1203L66.2747 65.0016L2.43945 127.333C4.81439 129.77 8.68726 130.064 13.0915 127.627L87.9051 86.1203"
      fill="url(#paint2_linear_1128_6836)" />
    <path
      d="M87.9051 43.8813L13.0915 2.37501C8.68726 -0.0374872 4.81439 0.256255 2.43945 2.69375L66.2747 65L87.9051 43.8813Z"
      fill="url(#paint3_linear_1128_6836)" />
    <defs>
      <linearGradient id="paint0_linear_1128_6836" x1="60.6407" y1="121.447" x2="-23.2472" y2="35.5262"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#00A0FF" />
        <stop offset="0.0066" stop-color="#00A1FF" />
        <stop offset="0.2601" stop-color="#00BEFF" />
        <stop offset="0.5122" stop-color="#00D2FF" />
        <stop offset="0.7604" stop-color="#00DFFF" />
        <stop offset="1" stop-color="#00E3FF" />
      </linearGradient>
      <linearGradient id="paint1_linear_1128_6836" x1="122.27" y1="64.9903" x2="-1.64588" y2="64.9903"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFE000" />
        <stop offset="0.4087" stop-color="#FFBD00" />
        <stop offset="0.7754" stop-color="#FFA500" />
        <stop offset="1" stop-color="#FF9C00" />
      </linearGradient>
      <linearGradient id="paint2_linear_1128_6836" x1="76.1431" y1="53.5211" x2="-37.6158" y2="-62.9943"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF3A44" />
        <stop offset="1" stop-color="#C31162" />
      </linearGradient>
      <linearGradient id="paint3_linear_1128_6836" x1="-13.6292" y1="164.119" x2="37.1692" y2="112.09"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#32A071" />
        <stop offset="0.0685" stop-color="#2DA771" />
        <stop offset="0.4762" stop-color="#15CF74" />
        <stop offset="0.8009" stop-color="#06E775" />
        <stop offset="1" stop-color="#00F076" />
      </linearGradient>
    </defs>
  </svg>
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