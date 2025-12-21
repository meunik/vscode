<script setup>
import { ref, onMounted } from 'vue'
import Icon from '@/assets/icons/Icon.vue'
import curriculoData from '@/data/curriculo.json'

const dados = ref(JSON.parse(JSON.stringify(curriculoData)))

const carregarDados = () => {
  const salvos = localStorage.getItem('curriculo-dados')
  if (salvos) {
    try {
      dados.value = JSON.parse(salvos)
    } catch (e) {
      console.error('Erro ao carregar dados:', e)
    }
  }
}

onMounted(() => carregarDados())
</script>

<template>
  <div class="h-full overflow-y-auto bg-principal text-texto-principal p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Cabeçalho com Foto e Informações Pessoais -->
      <div class="flex gap-8 items-start mb-8 pb-8 border-b border-borda-principal">
        <div v-if="dados.informacoesPessoais.foto && dados.configuracoes.mostrarFoto" class="shrink-0">
          <img 
            :src="dados.informacoesPessoais.foto" 
            :alt="dados.informacoesPessoais.nome"
            class="w-32 h-32 rounded-full border-4 border-destaque object-cover"
          />
        </div>
        <div class="flex-1">
          <h1 class="text-4xl font-bold text-texto-principal mb-2">{{ dados.informacoesPessoais.nome }}</h1>
          <h2 class="text-xl text-destaque mb-4">{{ dados.informacoesPessoais.cargo }}</h2>
          <div class="space-y-1 text-sm text-texto-secundario mb-4">
            <div class="flex items-center gap-2">
              <Icon name="email" :size="16" />
              <span>{{ dados.informacoesPessoais.email }}</span>
            </div>
            <div v-if="dados.informacoesPessoais.telefone" class="flex items-center gap-2">
              <Icon name="telefone" :size="16" />
              <span>{{ dados.informacoesPessoais.telefone }}</span>
            </div>
            <div v-if="dados.informacoesPessoais.localizacao" class="flex items-center gap-2">
              <Icon name="localizacao" :size="16" />
              <span>{{ dados.informacoesPessoais.localizacao }}</span>
            </div>
          </div>
          <p class="text-texto-principal leading-relaxed">{{ dados.informacoesPessoais.resumo }}</p>
        </div>
      </div>

      <!-- Links Sociais -->
      <div v-if="dados.links.length > 0" class="mb-8">
        <div class="flex flex-wrap gap-3">
          <a 
            v-for="(link, idx) in dados.links" 
            :key="idx"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-4 py-2 bg-secundario border border-borda-principal rounded hover:border-destaque transition-colors text-sm"
          >
            <UIcon :name="link.icone" class="text-base" />
            <span>{{ link.titulo }}</span>
          </a>
        </div>
      </div>

      <!-- Habilidades -->
      <div v-if="dados.habilidades.length > 0" class="mb-8">
        <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
          <Icon name="codigo" :size="24" />
          Habilidades
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(categoria, idx) in dados.habilidades" :key="idx" class="space-y-3">
            <h4 class="text-lg font-semibold text-destaque">{{ categoria.categoria }}</h4>
            <div class="space-y-2">
              <div v-for="(item, itemIdx) in categoria.itens" :key="itemIdx" class="space-y-1">
                <div class="flex justify-between text-sm">
                  <span class="text-texto-principal">{{ item.nome }}</span>
                  <span class="text-texto-secundario" v-if="dados.configuracoes.mostrarNivelHabilidades">{{ item.nivel }}%</span>
                </div>
                <div v-if="dados.configuracoes.mostrarNivelHabilidades" class="w-full h-2 bg-secundario rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-destaque transition-all duration-300"
                    :style="{ width: item.nivel + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiência Profissional -->
      <div v-if="dados.experiencia.length > 0" class="mb-8">
        <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
          <Icon name="pasta" :size="24" />
          Experiência Profissional
        </h3>
        <div class="space-y-6">
          <div 
            v-for="(exp, idx) in dados.experiencia" 
            :key="idx"
            class="p-4 bg-secundario border border-borda-principal rounded"
          >
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-lg font-semibold text-texto-principal">{{ exp.cargo }}</h4>
              <span class="text-xs text-texto-secundario">{{ exp.periodo }}</span>
            </div>
            <p class="text-sm text-destaque mb-3">{{ exp.empresa }}</p>
            <p class="text-sm text-texto-secundario mb-3">{{ exp.descricao }}</p>
            <ul v-if="exp.realizacoes.length > 0" class="space-y-1">
              <li 
                v-for="(realizacao, rIdx) in exp.realizacoes" 
                :key="rIdx"
                class="text-sm text-texto-principal flex gap-2"
              >
                <span class="text-destaque">•</span>
                <span>{{ realizacao }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Educação -->
      <div v-if="dados.educacao.length > 0" class="mb-8">
        <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
          <Icon name="livro" :size="24" />
          Educação
        </h3>
        <div class="space-y-4">
          <div 
            v-for="(edu, idx) in dados.educacao" 
            :key="idx"
            class="p-4 bg-secundario border border-borda-principal rounded"
          >
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-lg font-semibold text-texto-principal">{{ edu.curso }}</h4>
              <span class="text-xs px-2 py-1 rounded" :class="edu.status === 'Concluído' ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'">
                {{ edu.status }}
              </span>
            </div>
            <p class="text-sm text-destaque mb-1">{{ edu.instituicao }}</p>
            <p class="text-xs text-texto-secundario">{{ edu.periodo }}</p>
          </div>
        </div>
      </div>

      <!-- Projetos -->
      <div v-if="dados.projetos.length > 0" class="mb-8">
        <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
          <Icon name="estrela" :size="24" />
          Projetos
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="(projeto, idx) in dados.projetos" 
            :key="idx"
            class="p-4 bg-secundario border border-borda-principal rounded hover:border-destaque transition-colors"
          >
            <a 
              :href="projeto.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="block"
            >
              <h4 class="text-lg font-semibold text-texto-principal mb-2 hover:text-destaque transition-colors">
                {{ projeto.nome }}
              </h4>
              <p class="text-sm text-texto-secundario mb-3">{{ projeto.descricao }}</p>
              <div v-if="projeto.tecnologias.length > 0" class="flex flex-wrap gap-2">
                <span 
                  v-for="(tech, tIdx) in projeto.tecnologias" 
                  :key="tIdx"
                  class="px-2 py-1 bg-principal text-destaque text-xs rounded border border-borda-principal"
                >
                  {{ tech }}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Idiomas -->
      <div v-if="dados.idiomas.length > 0" class="mb-8">
        <h3 class="flex items-center gap-2 text-2xl font-bold mb-4 text-texto-principal">
          <Icon name="globo" :size="24" />
          Idiomas
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="(idioma, idx) in dados.idiomas" 
            :key="idx"
            class="p-3 bg-secundario border border-borda-principal rounded text-center"
          >
            <p class="text-sm font-semibold text-texto-principal mb-1">{{ idioma.idioma }}</p>
            <p class="text-xs text-texto-secundario">{{ idioma.nivel }}</p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="pt-8 border-t border-borda-principal text-center text-xs text-texto-secundario">
        <p>Currículo atualizado em {{ new Date().toLocaleDateString('pt-BR') }}</p>
      </div>
    </div>
  </div>
</template>
