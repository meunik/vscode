<template>
  <div class="h-12 d-flex justify-content-center align-items-center box-icon-menu">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="tamanho"
        :height="tamanho"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-more-horizontal"
        data-darkreader-inline-stroke=""
        style="--darkreader-inline-stroke: currentColor"
    >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      tamanho: {
        type: Number,
        default: 16
      },
    },
  }
</script>