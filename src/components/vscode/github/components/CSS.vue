<template>
  <span class="d-contents text-css">CSS<span v-if="tres" style="display: contents;">3</span></span>
</template>

<script>
  export default {
    props: {
      tres: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>