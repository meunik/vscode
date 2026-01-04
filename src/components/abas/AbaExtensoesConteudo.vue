<script setup>
import { ref, computed } from 'vue'
import { useEditorAbas } from '@/composables/useEditorAbas'
import { useServers } from '@/composables/useApi'
import LoadingMessage from '@/components/common/LoadingMessage.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'

const { adicionarAba } = useEditorAbas()
const { servers: serversData, loading, error } = useServers()
const servers = computed(() => serversData.value || [])
const termoPesquisa = ref('')

const serversFiltrados = computed(() => 
  servers.value.filter(server => 
    server.nome.toLowerCase().includes(termoPesquisa.value.toLowerCase()) ||
    server.hostname.toLowerCase().includes(termoPesquisa.value.toLowerCase())
  )
)

const abrirServer = (server) => {
  adicionarAba(server.nome, '', 'iframe', server.url, { 
    url: server.url,
    icone: {
      tipo: 'img',
      valor: getIconeUrl(server.icone)
    }
  })
}

const getIconeUrl = (nomeIcone) => {
  if (!nomeIcone) return null
  return new URL(`../../assets/extensoes/${nomeIcone}`, import.meta.url).href
}
</script>

<template>
  <div class="p-2 text-texto-principal">
    <div v-if="loading" class="text-center py-4">
      <LoadingMessage message="Carregando aplicações..." iconSize="text-2xl" />
    </div>

    <div v-else-if="error" class="text-center py-4">
      <ErrorMessage message="Erro ao carregar aplicações" iconSize="text-2xl" />
    </div>

    <template v-else>
      <div class="mb-4">
        <input 
          v-model="termoPesquisa"
          type="text" 
          placeholder="Pesquisar aplicações" 
          class="w-full px-2 py-1 bg-input border border-input text-texto-principal text-[13px] outline-none focus:border-borda-destaque rounded-sm" 
        />
      </div>
      <div class="flex flex-col gap-3">
        <div v-for="server in serversFiltrados" :key="server.id" class="p-2 bg-terciario rounded flex justify-between items-start cursor-pointer gap-3 hover:bg-terciario/80 transition-colors" @click="abrirServer(server)">
          <div class="flex gap-3 flex-1 min-w-0">
            <div v-if="server.icone" class="shrink-0 w-12 h-12 flex items-center justify-center">
              <img :src="getIconeUrl(server.icone)" :alt="server.nome" class="w-full h-full object-contain" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-sm mb-1 text-texto-titulo">{{ server.nome }}</div>
              <div class="text-xs text-texto-principal leading-relaxed tresPontinhos">{{ server.url }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
