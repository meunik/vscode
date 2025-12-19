<script setup>
import Layout from '@/components/layout/Layout.vue'
import NavBar from '@/components/NavBar.vue'
import Main from '@/components/Main.vue'
import { onMounted } from 'vue'
import { useEditorAbas } from '@/composables/useEditorAbas'

const { adicionarAba } = useEditorAbas()

onMounted(() => {
  adicionarAba('Bem-vindo.txt', 'Bem-vindo ao VS Code!\n\nComece explorando os arquivos ou criando um novo arquivo.')
})
</script>

<template>
  <Layout>
    <div class="vscode-layout">
      <NavBar />
      <Main />
    </div>
  </Layout>
</template>

<style scoped>
.vscode-layout {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #1e1e1e;
}
</style>

