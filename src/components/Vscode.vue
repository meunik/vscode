<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import NavBar from '@/components/NavBar.vue'
import Main from '@/components/Main.vue'

import { onMounted } from 'vue'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useTemas } from '@/composables/useTemas'

const { adicionarAba } = useEditorAbas()
const { inicializarTema } = useTemas()

onMounted(() => {
  inicializarTema()
  adicionarAba('Bem-vindo', '', 'componente', 'BemVindo.vue', { 
    componente: 'bemVindo/BemVindo',
    naoSalvarNoHistorico: true
  })
})
</script>

<template>
<div class="caixa">
  <Header />
  <div class="flex flex-1 w-full h-full overflow-hidden bg-principal">
    <NavBar />
    <Main />
  </div>
  <Footer />
</div>
</template>

<style scoped>
</style>

