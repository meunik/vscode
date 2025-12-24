<div align="center">

# 💻 Portfólio VSCode Style

### *Um portfólio único que simula o VS Code*

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

[✨ Ver Demo](https://marcospaulo.dev) • [📝 Sobre](#sobre) • [🚀 Features](#features) • [🛠️ Tecnologias](#tecnologias)

---

</div>

## 📖 Sobre

Este é meu **site pessoal e portfólio** desenvolvido com uma proposta inovadora: **replicar a interface do Visual Studio Code**. A aplicação oferece uma experiência interativa onde você pode explorar meu currículo, projetos e informações profissionais em um ambiente familiar para desenvolvedores.

> *"Por que criar um portfólio comum quando você pode transformá-lo em uma experiência única?"*

## ✨ Features

### 🎨 **Interface VSCode Autêntica**
- Réplica fiel do VS Code com barra lateral, editor de abas e terminal
- Navegação por arquivos e pastas como em um editor real
- Sistema de abas funcionais para visualizar diferentes seções

### 🌓 **Temas Personalizáveis**
Escolha entre 6 temas diferentes:
- Dark (padrão)
- Light
- Monokai
- Dracula
- Solarized Light
- [SeilaColor (Meu Tema)](https://marketplace.visualstudio.com/items?itemName=SeilaColor.seilacolor)

O tema selecionado é **salvo localmente** e se adapta automaticamente à preferência do sistema.

### 📄 **Seções Interativas**

#### **Bem-vindo**
Página inicial com acesso rápido ao currículo e arquivos recentes

#### **Currículo Completo**
- 👤 Informações Pessoais
- 💼 Experiência Profissional
- 🎓 Formação Acadêmica
- 💪 Habilidades Técnicas (Frontend, Backend, Ferramentas)
- 🌐 Idiomas
- 🔗 Links Sociais
- 🚀 Projetos

#### **Explorador de Arquivos**
Sistema de árvore de arquivos navegável com expansão/colapso de pastas

#### **Editor Markdown**
Visualização de arquivos Markdown com syntax highlighting usando Highlight.js

#### **Pesquisa**
Sistema de busca integrado no estilo VS Code

#### **Configurações**
Menu de configurações com seletor de temas e preferências

<!-- ### 🌍 **Internacionalização (i18n)**
Suporte para múltiplos idiomas:
- 🇧🇷 Português (pt-BR)
- 🇺🇸 English (en-US) -->

### 📱 **Design Responsivo**
Interface totalmente adaptável para:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🛠️ Tecnologias

### **Core**
- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progressivo com Composition API
- **[Vite](https://vitejs.dev/)** - Build tool extremamente rápido
- **[Vue Router](https://router.vuejs.org/)** - Roteamento oficial do Vue

### **UI/UX**
- **[TailwindCSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Nuxt UI](https://ui.nuxt.com/)** - Biblioteca de componentes
- **[Iconify](https://iconify.design/)** - Sistema de ícones unificado

### **Gerenciamento de Estado**
- **[Pinia](https://pinia.vuejs.org/)** - State management pattern + biblioteca

<!-- ### **Internacionalização**
- **[Vue I18n](https://vue-i18n.intlify.dev/)** - Suporte a múltiplos idiomas -->

### **Syntax Highlighting**
- **[Highlight.js](https://highlightjs.org/)** - Destaque de sintaxe para código

### **Outras Ferramentas**
- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[Docker](https://www.docker.com/)** - Containerização
- **Nginx** - Servidor web para produção

## 📂 Estrutura do Projeto

```
vscode2/
├── src/
│   ├── assets/
│   │   ├── css/              # Estilos dos temas
│   │   └── icons/            # Sistema de ícones customizados
│   ├── components/
│   │   ├── abas/             # Componentes das abas laterais
│   │   ├── bemVindo/         # Tela de boas-vindas
│   │   ├── curriculo/        # Componentes do currículo
│   │   └── layout/           # Layout base (Header, Footer)
│   ├── composables/          # Composables Vue (lógica reutilizável)
│   │   ├── useAbas.js        # Gerenciamento de abas
│   │   ├── useArquivos.js    # Sistema de arquivos
│   │   ├── useEditorAbas.js  # Editor de abas
│   │   ├── usePesquisa.js    # Sistema de busca
│   │   ├── useRedimensionar.js # Redimensionamento de painéis
│   │   └── useTemas.js       # Sistema de temas
│   ├── data/                 # Dados JSON (currículo, setup)
│   ├── i18n/                 # Arquivos de tradução
│   ├── router/               # Configuração de rotas
│   ├── stores/               # Stores Pinia
│   └── utils/                # Utilitários
├── public/                   # Arquivos estáticos
├── docker-compose.yml        # Configuração Docker
└── nginx.conf               # Configuração Nginx
```

## 🎯 Como Usar

### **Navegação**

1. **Barra Lateral Esquerda**: Clique nos ícones para abrir diferentes painéis:
   - 📁 Explorador de arquivos
   - 🔍 Pesquisa
   - 🌿 Controle de versão (Git)
   - 🧩 Extensões
   - 📷 Galeria de fotos

2. **Sistema de Abas**: 
   - Clique nos arquivos para abri-los em novas abas
   - Use o `×` para fechar abas
   - Abas ficam destacadas quando ativas

3. **Temas**: 
   - Clique no ícone de configurações (⚙️) no canto superior direito
   - Selecione seu tema favorito
   - A preferência será salva automaticamente

4. **Currículo**:
   - Navegue pelas diferentes seções do currículo
   - Edite as informações através dos formulários interativos
   - Visualize em formato Markdown ou interativo

### **Atalhos e Dicas**

- 💡 O sistema lembra das abas recentemente abertas
- 💡 Temas se adaptam automaticamente ao modo escuro/claro do sistema
- 💡 Todos os dados do currículo são carregados do arquivo `curriculo.json`
- 💡 Suporta visualização de arquivos Markdown com syntax highlighting

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

### 💙 Desenvolvido com Vue.js

**[⬆ Voltar ao topo](#-portfólio-vscode-style)**

</div>