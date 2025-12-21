<script setup>
import { ref, onMounted } from 'vue'
import Icon from '@/assets/icons/Icon.vue'
import curriculoData from '@/data/curriculo.json'

const dados = ref(JSON.parse(JSON.stringify(curriculoData)))
const abaSelecionada = ref('pessoais')

const abas = [
  { id: 'pessoais', titulo: 'Pessoais', icone: 'line-md:edit' },
  { id: 'links', titulo: 'Links', icone: 'line-md:link' },
  { id: 'habilidades', titulo: 'Habilidades', icone: 'line-md:briefcase-check-filled' },
  { id: 'experiencia', titulo: 'Experiência', icone: 'line-md:lightbulb-filled' },
  { id: 'educacao', titulo: 'Educação', icone: 'line-md:clipboard-twotone' },
  { id: 'projetos', titulo: 'Projetos', icone: 'line-md:briefcase-twotone' },
  { id: 'idiomas', titulo: 'Idiomas', icone: 'line-md:chat-round-dots' }
]

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

const salvarDados = async () => {
  localStorage.setItem('curriculo-dados', JSON.stringify(dados.value))
  const { encontrarItemPorCaminho } = await import('@/composables/useArquivos.js').then(m => m.useArquivos())
  const arquivo = encontrarItemPorCaminho('Profissional/Curriculo.md')
  if (arquivo) arquivo.conteudo = gerarMarkdown()
  alert('Currículo salvo com sucesso!')
}

const resetarParaPadrao = () => {
  if (confirm('Tem certeza que deseja resetar todos os dados para o padrão?')) {
    dados.value = JSON.parse(JSON.stringify(curriculoData))
    localStorage.removeItem('curriculo-dados')
    alert('Dados resetados!')
  }
}

const gerarMarkdown = () => {
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
  d.educacao.forEach(edu => md += `### ${edu.curso}\n**${edu.instituicao}** • ${edu.periodo} • ${edu.status}\n\n`)
  
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

const adicionarLink = () => dados.value.links.push({ tipo: 'novo', titulo: 'Novo Link', url: 'https://', icone: 'mdi:link' })
const removerLink = (index) => dados.value.links.splice(index, 1)
const adicionarHabilidadeCategoria = () => dados.value.habilidades.push({ categoria: 'Nova Categoria', itens: [] })
const removerHabilidadeCategoria = (index) => dados.value.habilidades.splice(index, 1)
const adicionarHabilidadeItem = (catIndex) => dados.value.habilidades[catIndex].itens.push({ nome: 'Nova Habilidade', nivel: 50 })
const removerHabilidadeItem = (catIndex, itemIndex) => dados.value.habilidades[catIndex].itens.splice(itemIndex, 1)
const adicionarExperiencia = () => dados.value.experiencia.push({ cargo: 'Novo Cargo', empresa: 'Nova Empresa', periodo: 'Mês Ano - Mês Ano', descricao: 'Descrição', realizacoes: [] })
const removerExperiencia = (index) => dados.value.experiencia.splice(index, 1)
const adicionarRealizacao = (expIndex) => dados.value.experiencia[expIndex].realizacoes.push('Nova realização')
const removerRealizacao = (expIndex, realIndex) => dados.value.experiencia[expIndex].realizacoes.splice(realIndex, 1)
const adicionarEducacao = () => dados.value.educacao.push({ curso: 'Novo Curso', instituicao: 'Nova Instituição', periodo: 'Ano - Ano', status: 'Em andamento' })
const removerEducacao = (index) => dados.value.educacao.splice(index, 1)
const adicionarProjeto = () => dados.value.projetos.push({ nome: 'Novo Projeto', descricao: 'Descrição do projeto', tecnologias: [], url: 'https://' })
const removerProjeto = (index) => dados.value.projetos.splice(index, 1)
const adicionarTecnologia = (projIndex) => dados.value.projetos[projIndex].tecnologias.push('Nova Tecnologia')
const removerTecnologia = (projIndex, techIndex) => dados.value.projetos[projIndex].tecnologias.splice(techIndex, 1)
const adicionarIdioma = () => dados.value.idiomas.push({ idioma: 'Novo Idioma', nivel: 'Básico' })
const removerIdioma = (index) => dados.value.idiomas.splice(index, 1)

onMounted(() => carregarDados())
</script>

<template>
  <div class="h-full flex flex-col bg-principal text-texto-principal">
    <div class="flex items-center justify-between px-4 py-3 bg-secundario border-b border-borda-principal">
      <div class="flex items-center gap-2 text-sm font-semibold">
        <UIcon name="line-md:file-document-filled" class="text-[18px]" />
        <span>Editor de Currículo</span>
      </div>
      <div class="flex gap-2">
        <button @click="salvarDados" class="flex items-center gap-1 px-3 py-1.5 bg-destaque text-white rounded text-xs font-medium hover:opacity-90 transition-opacity">
          <UIcon name="line-md:edit" class="text-[16px]" />
          <!-- <UIcon name="line-md:confirm" class="text-[16px]" /> -->
          Salvar
        </button>
        <button @click="resetarParaPadrao" class="flex items-center gap-1 px-3 py-1.5 bg-hover text-texto-principal rounded text-xs font-medium hover:bg-borda-principal transition-colors">
          <UIcon name="line-md:rotate-270" class="text-[16px]" />
          <!-- <UIcon name="line-md:close" class="text-[16px]" /> -->
          Resetar
        </button>
      </div>
    </div>

    <div class="flex gap-0.5 px-4 bg-secundario border-b border-borda-principal overflow-x-auto">
      <button v-for="aba in abas" :key="aba.id" @click="abaSelecionada = aba.id" :class="['flex items-center gap-2 px-4 py-2 text-xs whitespace-nowrap transition-colors border-b-2', abaSelecionada === aba.id ? 'text-destaque border-destaque' : 'text-texto-secundario border-transparent hover:text-texto-principal']">
        <UIcon :name="aba.icone" class="text-[14px]" />
        <span>{{ aba.titulo }}</span>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-6">
      <div class="max-w-3xl mx-auto">
        <div v-show="abaSelecionada === 'pessoais'" class="space-y-4">
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">Nome</label><input v-model="dados.informacoesPessoais.nome" type="text" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" /></div>
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">Cargo</label><input v-model="dados.informacoesPessoais.cargo" type="text" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" /></div>
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">Email</label><input v-model="dados.informacoesPessoais.email" type="email" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" /></div>
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">Telefone</label><input v-model="dados.informacoesPessoais.telefone" type="tel" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" /></div>
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">Localização</label><input v-model="dados.informacoesPessoais.localizacao" type="text" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" /></div>
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">URL da Foto</label><input v-model="dados.informacoesPessoais.foto" type="url" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" /></div>
          <div><label class="block text-xs font-medium text-texto-secundario mb-1.5">Resumo</label><textarea v-model="dados.informacoesPessoais.resumo" rows="4" class="w-full px-3 py-2 bg-secundario border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque resize-none"></textarea></div>
        </div>

        <div v-show="abaSelecionada === 'links'" class="space-y-4">
          <div v-for="(link, idx) in dados.links" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold">Link {{ idx + 1 }}</h4>
              <button @click="removerLink(idx)" class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50 transition-colors">Remover</button>
            </div>
            <div class="space-y-3">
              <input v-model="link.tipo" type="text" placeholder="Tipo" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="link.titulo" type="text" placeholder="Título" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="link.url" type="url" placeholder="URL" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="link.icone" type="text" placeholder="Ícone (mdi:github)" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
            </div>
          </div>
          <button @click="adicionarLink" class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors">+ Adicionar Link</button>
        </div>

        <div v-show="abaSelecionada === 'habilidades'" class="space-y-4">
          <div v-for="(cat, catIdx) in dados.habilidades" :key="catIdx" class="p-4 bg-secundario border border-borda-principal rounded">
            <div class="flex items-center justify-between mb-3">
              <input v-model="cat.categoria" type="text" class="text-sm font-semibold bg-transparent border-none text-texto-principal focus:outline-none" />
              <button @click="removerHabilidadeCategoria(catIdx)" class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">Remover</button>
            </div>
            <div class="space-y-2">
              <div v-for="(item, itemIdx) in cat.itens" :key="itemIdx" class="flex gap-2">
                <input v-model="item.nome" type="text" placeholder="Habilidade" class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-destaque" />
                <input v-model.number="item.nivel" type="number" min="0" max="100" placeholder="%" class="w-16 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-destaque" />
                <button @click="removerHabilidadeItem(catIdx, itemIdx)" class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">×</button>
              </div>
              <button @click="adicionarHabilidadeItem(catIdx)" class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-destaque hover:text-destaque">+ Item</button>
            </div>
          </div>
          <button @click="adicionarHabilidadeCategoria" class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors">+ Adicionar Categoria</button>
        </div>

        <div v-show="abaSelecionada === 'experiencia'" class="space-y-4">
          <div v-for="(exp, idx) in dados.experiencia" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold">{{ exp.cargo }}</h4>
              <button @click="removerExperiencia(idx)" class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">Remover</button>
            </div>
            <div class="space-y-3">
              <input v-model="exp.cargo" type="text" placeholder="Cargo" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="exp.empresa" type="text" placeholder="Empresa" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="exp.periodo" type="text" placeholder="Jan 2022 - Presente" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <textarea v-model="exp.descricao" rows="3" placeholder="Descrição" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque resize-none"></textarea>
              <div class="space-y-2 pt-2 border-t border-borda-principal">
                <label class="block text-xs font-medium text-texto-secundario">Realizações</label>
                <div v-for="(real, rIdx) in exp.realizacoes" :key="rIdx" class="flex gap-2">
                  <input v-model="exp.realizacoes[rIdx]" type="text" class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-destaque" />
                  <button @click="removerRealizacao(idx, rIdx)" class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">×</button>
                </div>
                <button @click="adicionarRealizacao(idx)" class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-destaque hover:text-destaque">+ Realização</button>
              </div>
            </div>
          </div>
          <button @click="adicionarExperiencia" class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors">+ Adicionar Experiência</button>
        </div>

        <div v-show="abaSelecionada === 'educacao'" class="space-y-4">
          <div v-for="(edu, idx) in dados.educacao" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold">{{ edu.curso }}</h4>
              <button @click="removerEducacao(idx)" class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">Remover</button>
            </div>
            <div class="space-y-3">
              <input v-model="edu.curso" type="text" placeholder="Curso" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="edu.instituicao" type="text" placeholder="Instituição" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <input v-model="edu.periodo" type="text" placeholder="2018 - 2021" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <select v-model="edu.status" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque">
                <option value="Concluído">Concluído</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Trancado">Trancado</option>
              </select>
            </div>
          </div>
          <button @click="adicionarEducacao" class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors">+ Adicionar Educação</button>
        </div>

        <div v-show="abaSelecionada === 'projetos'" class="space-y-4">
          <div v-for="(proj, idx) in dados.projetos" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold">{{ proj.nome }}</h4>
              <button @click="removerProjeto(idx)" class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">Remover</button>
            </div>
            <div class="space-y-3">
              <input v-model="proj.nome" type="text" placeholder="Nome do Projeto" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <textarea v-model="proj.descricao" rows="3" placeholder="Descrição" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque resize-none"></textarea>
              <input v-model="proj.url" type="url" placeholder="URL" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <div class="space-y-2 pt-2 border-t border-borda-principal">
                <label class="block text-xs font-medium text-texto-secundario">Tecnologias</label>
                <div v-for="(tech, tIdx) in proj.tecnologias" :key="tIdx" class="flex gap-2">
                  <input v-model="proj.tecnologias[tIdx]" type="text" class="flex-1 px-3 py-1.5 bg-principal border border-borda-principal rounded text-xs text-texto-principal focus:outline-none focus:border-destaque" />
                  <button @click="removerTecnologia(idx, tIdx)" class="px-2 py-1.5 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">×</button>
                </div>
                <button @click="adicionarTecnologia(idx)" class="w-full py-1.5 border border-dashed border-borda-principal rounded text-xs text-texto-secundario hover:border-destaque hover:text-destaque">+ Tecnologia</button>
              </div>
            </div>
          </div>
          <button @click="adicionarProjeto" class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors">+ Adicionar Projeto</button>
        </div>

        <div v-show="abaSelecionada === 'idiomas'" class="space-y-4">
          <div v-for="(idioma, idx) in dados.idiomas" :key="idx" class="p-4 bg-secundario border border-borda-principal rounded">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-semibold">{{ idioma.idioma }}</h4>
              <button @click="removerIdioma(idx)" class="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs hover:bg-red-900/50">Remover</button>
            </div>
            <div class="space-y-3">
              <input v-model="idioma.idioma" type="text" placeholder="Idioma" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque" />
              <select v-model="idioma.nivel" class="w-full px-3 py-2 bg-principal border border-borda-principal rounded text-sm text-texto-principal focus:outline-none focus:border-destaque">
                <option value="Básico">Básico</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
                <option value="Fluente">Fluente</option>
                <option value="Nativo">Nativo</option>
              </select>
            </div>
          </div>
          <button @click="adicionarIdioma" class="w-full py-2.5 border-2 border-dashed border-borda-principal rounded text-sm text-texto-secundario hover:border-destaque hover:text-destaque transition-colors">+ Adicionar Idioma</button>
        </div>
      </div>
    </div>
  </div>
</template>
