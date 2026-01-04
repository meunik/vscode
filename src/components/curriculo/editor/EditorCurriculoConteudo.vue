<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCurriculo } from '@/composables/useApi'
import AbaPessoais from './abas/AbaPessoais.vue'
import AbaLinks from './abas/AbaLinks.vue'
import AbaHabilidades from './abas/AbaHabilidades.vue'
import AbaExperiencia from './abas/AbaExperiencia.vue'
import AbaFormacao from './abas/AbaFormacao.vue'
import AbaProjetos from './abas/AbaProjetos.vue'
import AbaIdiomas from './abas/AbaIdiomas.vue'
import LoadingMessage from '@/components/common/LoadingMessage.vue'
import ErrorMessage from '@/components/common/ErrorMessage.vue'

const { curriculo, loading, error } = useCurriculo()
const dados = computed(() => {
  if (!curriculo.value) return null
  // Prioriza dados salvos no localStorage
  const salvos = localStorage.getItem('curriculo-dados')
  if (salvos) {
    try {
      return JSON.parse(salvos)
    } catch (e) {
      console.error('Erro ao carregar dados do localStorage:', e)
    }
  }
  return curriculo.value
})
const abaSelecionada = ref('pessoais')

const abas = [
  { id: 'pessoais', titulo: 'Pessoais', icone: 'line-md:edit' },
  { id: 'links', titulo: 'Links', icone: 'line-md:link' },
  { id: 'habilidades', titulo: 'Habilidades', icone: 'line-md:briefcase-check-filled' },
  { id: 'experiencia', titulo: 'Experiência', icone: 'line-md:lightbulb-filled' },
  { id: 'formacao', titulo: 'Formação', icone: 'line-md:clipboard-twotone' },
  { id: 'projetos', titulo: 'Projetos', icone: 'line-md:briefcase-twotone' },
  { id: 'idiomas', titulo: 'Idiomas', icone: 'line-md:chat-round-dots' }
]

const salvarDados = async () => {
  if (!dados.value) return
  localStorage.setItem('curriculo-dados', JSON.stringify(dados.value))
  const { encontrarItemPorCaminho } = await import('@/composables/useArquivos.js').then(m => m.useArquivos())
  const arquivo = encontrarItemPorCaminho('Profissional/Curriculo.md')
  if (arquivo) arquivo.conteudo = gerarMarkdown()
  alert('Currículo salvo com sucesso!')
}

const resetarParaPadrao = () => {
  if (confirm('Tem certeza que deseja resetar todos os dados para o padrão?')) {
    if (curriculo.value) {
      const copiaFresca = JSON.parse(JSON.stringify(curriculo.value))
      localStorage.setItem('curriculo-dados', JSON.stringify(copiaFresca))
      window.location.reload() // Recarrega para pegar os novos dados
    }
    localStorage.removeItem('curriculo-dados')
    alert('Dados resetados!')
  }
}

const gerarMarkdown = () => {
  if (!dados.value) return ''
  const d = dados.value
  let md = `# ${d.informacoesPessoais.nome}\n## ${d.informacoesPessoais.cargo}\n\n`
  
  if (d.links.length > 0) {
    d.links.forEach(link => md += `[![${link.titulo}](https://img.shields.io/badge/${link.titulo}-${link.tipo}-blue)](${link.url}) `)
    md += '\n\n---\n\n'
  }
  
  md += `## 👤 Sobre Mim\n\n📧 ${d.informacoesPessoais.email}  \n`
  if (d.informacoesPessoais.telefone) md += `📱 ${d.informacoesPessoais.telefone}  \n`
  if (d.informacoesPessoais.localizacao) md += `📍 ${d.informacoesPessoais.localizacao}  \n`
  md += `\n${d.informacoesPessoais.resumo}\n\n---\n\n## 💻 Habilidades\n\n`
  
  d.habilidades.forEach(cat => {
    md += `### ${cat.categoria}\n`
    cat.itens.forEach(item => md += `- **${item.nome}** ${'█'.repeat(Math.floor(item.nivel / 5))} ${item.nivel}%\n`)
    md += '\n'
  })
  md += '---\n\n## 💼 Experiência Profissional\n\n'
  
  d.experiencia.forEach(exp => {
    md += `### ${exp.cargo}\n**${exp.empresa}** • ${exp.periodo}\n\n${exp.descricao}\n\n`
    if (exp.realizacoes.length > 0) {
      exp.realizacoes.forEach(r => md += `- ${r}\n`)
      md += '\n'
    }
  })
  
  md += '---\n\n## 🎓 Educação\n\n'
  d.formacao.forEach(edu => md += `### ${edu.curso}\n**${edu.instituicao}** • ${edu.periodo} • ${edu.status}\n\n`)
  
  if (d.projetos.length > 0) {
    md += '---\n\n## 🚀 Projetos\n\n'
    d.projetos.forEach(proj => {
      md += `### [${proj.nome}](${proj.url})\n${proj.descricao}\n\n`
      if (proj.tecnologias.length > 0) {
        proj.tecnologias.forEach(tech => md += `\`${tech}\` `)
        md += '\n\n'
      }
    })
  }
  
  if (d.idiomas.length > 0) {
    md += '---\n\n## 🌐 Idiomas\n\n'
    d.idiomas.forEach(idioma => md += `- **${idioma.idioma}**: ${idioma.nivel}\n`)
  }
  
  md += `\n---\n\n*Currículo atualizado em ${new Date().toLocaleDateString('pt-BR')}*\n`
  return md
}

// Manipuladores de Links
const adicionarLink = () => {
  if (!dados.value) return
  dados.value.links.push({ tipo: 'novo', titulo: 'Novo Link', url: 'https://', icone: 'mdi:link' })
}
const removerLink = (index) => {
  if (!dados.value) return
  dados.value.links.splice(index, 1)
}

// Manipuladores de Habilidades
const adicionarHabilidadeCategoria = () => {
  if (!dados.value) return
  dados.value.habilidades.push({ categoria: 'Nova Categoria', itens: [] })
}
const removerHabilidadeCategoria = (index) => {
  if (!dados.value) return
  dados.value.habilidades.splice(index, 1)
}
const adicionarHabilidadeItem = (catIndex) => {
  if (!dados.value) return
  dados.value.habilidades[catIndex].itens.push({ nome: 'Nova Habilidade', nivel: 50 })
}
const removerHabilidadeItem = (catIndex, itemIndex) => {
  if (!dados.value) return
  dados.value.habilidades[catIndex].itens.splice(itemIndex, 1)
}

// Manipuladores de Experiência
const adicionarExperiencia = () => {
  if (!dados.value) return
  dados.value.experiencia.push({ cargo: 'Novo Cargo', empresa: 'Nova Empresa', periodo: 'Mês Ano - Mês Ano', descricao: 'Descrição', realizacoes: [], stacks: [] })
}
const removerExperiencia = (index) => {
  if (!dados.value) return
  dados.value.experiencia.splice(index, 1)
}
const adicionarRealizacao = (expIndex) => {
  if (!dados.value) return
  dados.value.experiencia[expIndex].realizacoes.push('Nova realização')
}
const removerRealizacao = (expIndex, realIndex) => {
  if (!dados.value) return
  dados.value.experiencia[expIndex].realizacoes.splice(realIndex, 1)
}
const adicionarStack = (expIndex) => {
  if (!dados.value) return
  if (!dados.value.experiencia[expIndex].stacks) {
    dados.value.experiencia[expIndex].stacks = []
  }
  dados.value.experiencia[expIndex].stacks.push('devicon:laravel')
}
const removerStack = (expIndex, stackIndex) => {
  if (!dados.value) return
  dados.value.experiencia[expIndex].stacks.splice(stackIndex, 1)
}

// Manipuladores de Formação
const adicionarFormacao = () => {
  if (!dados.value) return
  dados.value.formacao.push({ curso: 'Novo Curso', instituicao: 'Nova Instituição', periodo: 'Ano - Ano', status: 'Em andamento' })
}
const removerFormacao = (index) => {
  if (!dados.value) return
  dados.value.formacao.splice(index, 1)
}

// Manipuladores de Projetos
const adicionarProjeto = () => {
  if (!dados.value) return
  dados.value.projetos.push({ nome: 'Novo Projeto', descricao: 'Descrição do projeto', tecnologias: [], url: 'https://' })
}
const removerProjeto = (index) => {
  if (!dados.value) return
  dados.value.projetos.splice(index, 1)
}
const adicionarTecnologia = (projIndex) => {
  if (!dados.value) return
  dados.value.projetos[projIndex].tecnologias.push('Nova Tecnologia')
}
const removerTecnologia = (projIndex, techIndex) => {
  if (!dados.value) return
  dados.value.projetos[projIndex].tecnologias.splice(techIndex, 1)
}

// Manipuladores de Idiomas
const adicionarIdioma = () => {
  if (!dados.value) return
  dados.value.idiomas.push({ idioma: 'Novo Idioma', nivel: 'Básico' })
}
const removerIdioma = (index) => {
  if (!dados.value) return
  dados.value.idiomas.splice(index, 1)
}
</script>

<template>
  <div class="h-full flex flex-col bg-principal text-texto-principal">
    
    <div v-if="loading" class="h-full flex items-center justify-center">
      <LoadingMessage message="Carregando currículo..." />
    </div>

    <div v-else-if="error" class="h-full flex items-center justify-center">
      <ErrorMessage message="Erro ao carregar currículo" />
    </div>

    <template v-else-if="dados">
      <div class="flex items-center justify-between px-4 py-3 bg-secundario border-b border-borda-principal">
      <div class="flex items-center gap-2 text-sm font-semibold">
        <UIcon name="line-md:file-document-filled" class="text-[18px]" />
        <span>Editor de Currículo</span>
      </div>
      <div class="flex gap-2">
        <button 
          @click="salvarDados" 
          class="flex items-center gap-1 px-3 py-1.5 bg-destaque text-white rounded text-xs font-medium hover:opacity-90 transition-opacity"
        >
          <UIcon name="line-md:edit" class="text-[16px]" />
          Salvar
        </button>
        <button 
          @click="resetarParaPadrao" 
          class="flex items-center gap-1 px-3 py-1.5 bg-hover text-texto-principal rounded text-xs font-medium hover:bg-borda-principal transition-colors"
        >
          <UIcon name="line-md:rotate-270" class="text-[16px]" />
          Resetar
        </button>
      </div>
    </div>

    <!-- Abas de navegação -->
    <div class="flex gap-0.5 px-4 bg-secundario border-b border-borda-principal overflow-x-auto">
      <button 
        v-for="aba in abas" 
        :key="aba.id" 
        @click="abaSelecionada = aba.id" 
        :class="[
          'flex items-center gap-2 px-4 py-2 text-xs whitespace-nowrap transition-colors border-b-2', 
          abaSelecionada === aba.id 
            ? 'text-destaque border-destaque' 
            : 'text-texto-secundario border-transparent hover:text-texto-principal'
        ]"
      >
        <UIcon :name="aba.icone" class="text-[14px]" />
        <span>{{ aba.titulo }}</span>
      </button>
    </div>

    <!-- Conteúdo das abas -->
    <div class="flex-1 overflow-y-auto p-6">
      <div class="max-w-3xl mx-auto">
        <AbaPessoais 
          v-show="abaSelecionada === 'pessoais'" 
          :dados="dados.informacoesPessoais" 
        />
        
        <AbaLinks 
          v-show="abaSelecionada === 'links'" 
          :links="dados.links"
          @adicionar="adicionarLink"
          @remover="removerLink"
        />
        
        <AbaHabilidades 
          v-show="abaSelecionada === 'habilidades'" 
          :habilidades="dados.habilidades"
          @adicionar-categoria="adicionarHabilidadeCategoria"
          @remover-categoria="removerHabilidadeCategoria"
          @adicionar-item="adicionarHabilidadeItem"
          @remover-item="removerHabilidadeItem"
        />
        
        <AbaExperiencia 
          v-show="abaSelecionada === 'experiencia'" 
          :experiencias="dados.experiencia"
          @adicionar="adicionarExperiencia"
          @remover="removerExperiencia"
          @adicionar-realizacao="adicionarRealizacao"
          @remover-realizacao="removerRealizacao"
          @adicionar-stack="adicionarStack"
          @remover-stack="removerStack"
        />
        
        <AbaFormacao 
          v-show="abaSelecionada === 'formacao'" 
          :formacoes="dados.formacao"
          @adicionar="adicionarFormacao"
          @remover="removerFormacao"
        />
        
        <AbaProjetos 
          v-show="abaSelecionada === 'projetos'" 
          :projetos="dados.projetos"
          @adicionar="adicionarProjeto"
          @remover="removerProjeto"
          @adicionar-tecnologia="adicionarTecnologia"
          @remover-tecnologia="removerTecnologia"
        />
        
        <AbaIdiomas 
          v-show="abaSelecionada === 'idiomas'" 
          :idiomas="dados.idiomas"
          @adicionar="adicionarIdioma"
          @remover="removerIdioma"
        />
      </div>
    </template>
  </div>
</template>
