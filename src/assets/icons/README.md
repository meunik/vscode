# Sistema de Ícones

Estrutura moderna e otimizada para gerenciamento de ícones SVG no projeto.

## 📁 Estrutura

```
src/assets/
├── icons/
│   ├── Icon.vue          # Componente base para ícones JSON
│   └── icons.json        # Banco de dados de ícones
└── svg/
    ├── Icone.vue         # Componente wrapper (retro-compatível)
    ├── stacks/           # Ícones de tecnologias (legados)
    └── *.vue            # Componentes SVG complexos (legados)
```

## 🎯 Como Usar

### Novo Sistema (Recomendado)

```vue
<template>
  <Icon name="github" :size="24" />
  <Icon name="debug" :size="32" :rotate="90" />
  <Icon name="seta" :ativo="true" />
</template>

<script setup>
import Icon from '@/assets/icons/Icon.vue';
</script>
```

### Sistema Legado (Retro-compatível)

```vue
<template>
  <Icone icone="github" :tamanho="24">GitHub</Icone>
  <Icone icone="cpu" :ativo="true" />
</template>

<script setup>
import Icone from '@/assets/svg/Icone.vue';
</script>
```

## 📋 Categorias de Ícones

### UI (`icons.json`)
Ícones de interface simples, renderizados via JSON:
- `closeAll`, `collapseAll`, `seta`, `tresPontos`
- `circulo`, `calendario`, `verificado`
- `relogio`, `localizacao`, `camera`, `monitor`

### VSCode (`icons.json`)
Ícones do editor VSCode:
- `debug`, `engrenagem`, `explorador`
- `extensoes`, `git`, `pesquisa`

### Social (`icons.json`)
Redes sociais e contato:
- `github`, `instagram`, `linkedin`
- `email`, `user`

### Files (`icons.json`)
Arquivos e documentos:
- `blocoNotas`, `notas`, `texto`

### Hardware (Componentes `.vue`)
SVGs complexos com gradientes/cores:
- `cpu`, `ram`, `placaMae`, `placaVideo`
- `monitor`, `monitorWide`, `monitorUltraWide`
- `mouse`, `teclado`, `headfone`
- `ssd`, `hd`, `m2`

### Stacks (Componentes `.vue`)
Logos de tecnologias:
- `bootstrap`, `vue`, `react`, `typescript`
- `docker`, `laravel`, `php`, `mysql`
- `html5`, `css3`, `javascript`

## ✨ Vantagens do Novo Sistema

1. **Menor Bundle**: JSON é mais leve que componentes `.vue`
2. **Melhor Performance**: Um único componente reutilizável
3. **Manutenção Fácil**: Adicionar ícones = editar JSON
4. **Organização**: Categorias claras e estruturadas
5. **Aliases**: Suporte a nomes alternativos

## 🔧 Adicionar Novos Ícones

### Ícone Simples (JSON)
Edite `icons.json`:
```json
{
  "ui": {
    "meuIcone": {
      "viewBox": "0 0 24 24",
      "paths": ["<path d=\"...\"/>"],
      "size": 24
    }
  }
}
```

### Ícone Complexo (Componente)
Crie arquivo `.vue` em `/svg/` com gradientes/cores específicas e adicione import no `Icone.vue`.

## 🗑️ Limpeza Futura

Os seguintes arquivos em `/svg/` podem ser removidos após migração completa:
- `CloseAll.vue`, `CollapseAll.vue`, `Seta.vue`, etc. (já no JSON)
- Todos os ícones simples que não usam cores hardcoded

Mantenha apenas:
- Ícones de hardware complexos
- Logos de tecnologias (stacks)
- Arquivos com SVGs multi-color/gradients
