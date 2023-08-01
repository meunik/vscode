<template>
  <span class="d-contents text-html">HTML<span v-if="cinco" style="display: contents;">5</span></span>
</template>

<script>
  export default {
    props: {
      cinco: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>