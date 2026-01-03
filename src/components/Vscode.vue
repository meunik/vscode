<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import NavBar from '@/components/NavBar.vue'
import Main from '@/components/Main.vue'

import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useTemas } from '@/composables/useTemas'
import { useArquivos } from '@/composables/useArquivos'

const route = useRoute()
const { adicionarAba } = useEditorAbas()
const { inicializarTema } = useTemas()
const { encontrarItemPorCaminho } = useArquivos()

const getIconeUrl = (nomeIcone) => {
  if (!nomeIcone) return null
  return new URL(`../assets/extensoes/${nomeIcone}`, import.meta.url).href
}

const arquivo = (meta) => {
  const arquivo = encontrarItemPorCaminho(meta.caminho)
  if (arquivo) adicionarAba(arquivo.nome, arquivo.caminho, arquivo.tipo, arquivo.icone, arquivo)
}

const componente = (meta) => {
  const { titulo, id, componente, icone } = meta.dados
  adicionarAba(titulo, '', 'componente', id, { componente, icone })
}

const iframe = (meta) => {
  const { titulo, url, urlBase, icone } = meta.dados
  const pathMatch = route.params.pathMatch
  const subPath = pathMatch ? '/' + (Array.isArray(pathMatch) ? pathMatch.join('/') : pathMatch) : ''
  const urlFinal = urlBase ? urlBase + subPath : url
  const iconeProcessado = icone.tipo === 'img' ? { ...icone, valor: getIconeUrl(icone.valor) } : icone
  adicionarAba(titulo, '', 'iframe', urlFinal, { url: urlFinal, icone: iconeProcessado })
}

const bemVindo = () => {
  adicionarAba('Bem-vindo', '', 'componente', 'BemVindo.vue', { 
    componente: 'bemVindo/BemVindo',
    naoSalvarNoHistorico: true
  })
}

onMounted(() => {
  inicializarTema()
  
  const meta = route.meta
  if (meta.tipo === 'arquivo') arquivo(meta)
  else if (meta.tipo === 'componente') componente(meta)
  else if (meta.tipo === 'iframe') iframe(meta)
  else bemVindo()
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

