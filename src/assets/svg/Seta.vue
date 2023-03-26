<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="tamanho"
    :height="tamanho"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-chevron-right"
    data-darkreader-inline-stroke=""
    style="--darkreader-inline-stroke: currentColor"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
</template>

<script>
  export default {
    props: {
      tamanho: {
        type: Number,
        default: 20
      },
    },
  }
</script>