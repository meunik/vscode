<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { ref } from 'vue'
</script>

<template>
  <div class="caixa">
    <Header />
    <main class="flex flex-1 overflow-auto h-full w-full">
      <slot />
    </main>
    <Footer />
  </div>
</template>
