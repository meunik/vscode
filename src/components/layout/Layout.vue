<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { ref } from 'vue'
</script>

<template>
  <div class="caixa">
    <Header />
    <div class="flex flex-1 overflow-hidden h-full w-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>
