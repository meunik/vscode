<script setup>
import { ref } from 'vue'

const recursos = [
  { titulo: 'Explorador de Arquivos', descricao: 'Navegue pelos arquivos do projeto', icone: 'line-md:folder' },
  { titulo: 'Repositórios GitHub', descricao: 'Veja meus repositórios integrados', icone: 'mdi:github' },
  { titulo: 'Editor de Currículo', descricao: 'Edite e visualize meu currículo', icone: 'line-md:file-document-filled' },
  { titulo: 'Temas Personalizados', descricao: 'Escolha entre vários temas', icone: 'line-md:sunny-filled-loop-to-moon-filled-loop-transition' }
]
</script>

<template>
  <div class="h-full overflow-y-auto bg-principal text-texto-principal p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4 text-destaque">Bem-vindo ao Meu Portfolio</h1>
        <p class="text-lg text-texto-secundario">Uma experiência interativa inspirada no VS Code</p>
      </div>

      <!-- Início Rápido -->
      <div class="mb-8 p-6 bg-secundario border border-borda-principal rounded-lg">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <UIcon name="line-md:speedometer" class="text-[24px]" />
          Início Rápido
        </h2>
        <div class="space-y-3 text-sm">
          <div class="flex items-start gap-3">
            <UIcon name="line-md:arrow-small-right" class="text-[16px] mt-0.5 text-destaque" />
            <div>
              <span class="font-medium">Abra o arquivo</span> <code class="px-2 py-0.5 bg-principal rounded text-xs">Profissional/Curriculo.md</code> para ver meu currículo
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="line-md:arrow-small-right" class="text-[16px] mt-0.5 text-destaque" />
            <div>
              <span class="font-medium">Explore a pasta</span> <code class="px-2 py-0.5 bg-principal rounded text-xs">Profissional/GitHub</code> para ver meus repositórios
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="line-md:arrow-small-right" class="text-[16px] mt-0.5 text-destaque" />
            <div>
              <span class="font-medium">Use o menu</span> superior para acessar o Editor de Currículo
            </div>
          </div>
          <div class="flex items-start gap-3">
            <UIcon name="line-md:arrow-small-right" class="text-[16px] mt-0.5 text-destaque" />
            <div>
              <span class="font-medium">Personalize o tema</span> clicando no ícone de engrenagem
            </div>
          </div>
        </div>
      </div>

      <!-- Recursos -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Recursos Disponíveis</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(recurso, idx) in recursos" 
            :key="idx"
            class="p-4 bg-secundario border border-borda-principal rounded-lg hover:border-destaque transition-colors"
          >
            <div class="flex items-start gap-3">
              <UIcon :name="recurso.icone" class="text-[24px] text-destaque" />
              <div>
                <h3 class="font-semibold mb-1">{{ recurso.titulo }}</h3>
                <p class="text-sm text-texto-secundario">{{ recurso.descricao }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Atalhos -->
      <div class="mb-8 p-6 bg-secundario border border-borda-principal rounded-lg">
        <h2 class="text-2xl font-semibold mb-4 flex items-center gap-2">
          <UIcon name="line-md:my-location" class="text-[24px]" />
          Dicas de Navegação
        </h2>
        <div class="space-y-2 text-sm text-texto-secundario">
          <p>• Clique nos arquivos no explorador lateral para visualizá-los</p>
          <p>• Use as abas superiores para alternar entre arquivos abertos</p>
          <p>• Clique no X nas abas para fechá-las</p>
          <p>• Explore as pastas clicando na seta ao lado do nome</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center text-sm text-texto-secundario pt-8 border-t border-borda-principal">
        <p>Desenvolvido com Vue 3 + Vite</p>
        <p class="mt-2">Um projeto de portfolio interativo</p>
      </div>
    </div>
  </div>
</template>
