# 🛠️ Guia Técnico - Adicionar Ícones

## 📝 Passo a Passo

### 1. Ícones Simples (Recomendado)

Para ícones que usam apenas `currentColor` (sem cores hardcoded):

**a) Extrair o SVG**
```html
<!-- SVG original -->
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2L2 7v10l10 5 10-5V7z"/>
</svg>
```

**b) Adicionar ao `icons.json`**
```json
{
  "ui": {
    "meuIcone": {
      "viewBox": "0 0 24 24",
      "paths": ["<path d=\"M12 2L2 7v10l10 5 10-5V7z\"/>"],
      "size": 24
    }
  }
}
```

**c) Usar**
```vue
<Icon name="meuIcone" :size="32" />
```

### 2. Ícones com Stroke

Para ícones que usam `stroke` ao invés de `fill`:

```json
{
  "ui": {
    "meuIconeStroke": {
      "viewBox": "0 0 24 24",
      "paths": ["<polyline points=\"9 18 15 12 9 6\"></polyline>"],
      "stroke": true,
      "fill": "none",
      "size": 24
    }
  }
}
```

### 3. Ícones Complexos (Componente .vue)

Para ícones com:
- Cores específicas hardcoded
- Gradientes (`<linearGradient>`, `<radialGradient>`)
- Filters/Effects
- Múltiplas cores fixas

**Criar arquivo `.vue` em `/src/assets/svg/`:**

```vue
<template>
  <svg
    :width="tamanho || padrao"
    :height="tamanho || padrao"
    viewBox="0 0 512 512"
    :class="`icone ${ativo ? 'ativo' : ''}`"
    :style="`transform: rotate(${rotate}deg);${estilo}`"
  >
    <defs>
      <linearGradient id="grad1">
        <stop offset="0%" style="stop-color:#ff0000" />
        <stop offset="100%" style="stop-color:#0000ff" />
      </linearGradient>
    </defs>
    <path fill="url(#grad1)" d="..." />
    <path fill="#00ff00" d="..." />
  </svg>
</template>

<script setup>
defineProps({
  tamanho: { type: Number, default: null },
  rotate: { type: Number, default: 0 },
  estilo: { type: String, default: '' },
  ativo: { type: Boolean, default: false },
});

const padrao = 32;
</script>
```

**Adicionar import em `Icone.vue`:**

```javascript
// No <script setup> do Icone.vue
import MeuIconeComplexo from '@/assets/svg/MeuIconeComplexo.vue';

// No objeto LEGACY_COMPONENTS
const LEGACY_COMPONENTS = {
  // ... outros
  'meuiconecomple xo': 'MeuIconeComplexo',
};
```

## 📋 Checklist de Qualidade

### Antes de Adicionar
- [ ] O ícone realmente precisa estar no projeto?
- [ ] Já existe algo similar?
- [ ] O SVG está otimizado? (use [SVGOMG](https://jakearchibald.github.io/svgomg/))

### SVG Limpo
```html
<!-- ❌ Ruim -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Layer_1">
    <path style="fill:#000000" d="..."/>
  </g>
</svg>

<!-- ✅ Bom -->
<svg viewBox="0 0 24 24">
  <path d="..."/>
</svg>
```

### Validação
- [ ] `viewBox` está correto
- [ ] Não tem IDs duplicados
- [ ] Usa `currentColor` quando possível
- [ ] Tamanho padrão adequado (16, 24, 32)

## 🎨 Categorias

### UI
Componentes de interface:
- Botões, controles, navegação
- Ícones de ação (fechar, expandir, etc)

### VSCode
Ícones específicos do VSCode:
- Funcionalidades do editor
- Painel de ferramentas

### Social
Redes sociais e contato:
- Logos de redes sociais
- Ícones de comunicação

### Files
Arquivos e pastas:
- Tipos de arquivo
- Gerenciamento de arquivos

### Hardware
Componentes de hardware:
- Periféricos
- Componentes de PC

### Stacks
Tecnologias e ferramentas:
- Linguagens de programação
- Frameworks
- Ferramentas de desenvolvimento

## 💡 Dicas

### Performance
```json
// ✅ Bom - Path único
{
  "paths": ["<path d=\"M10 20 L20 10 L10 0\"/>"]
}

// ⚠️ Aceitável - Múltiplos paths
{
  "paths": [
    "<path d=\"M10 20 L20 10\"/>",
    "<path d=\"L20 10 L10 0\"/>"
  ]
}

// ❌ Ruim - Muito complexo (use componente .vue)
{
  "paths": ["...50 paths..."]
}
```

### Nomeação
```javascript
// ✅ Bom
"github"         // lowercase, simples
"closeAll"       // camelCase quando composto
"monitorRemoto"  // camelCase em português

// ❌ Ruim
"GitHub"         // PascalCase
"close_all"      // snake_case
"monitor-remoto" // kebab-case
```

### Aliases
Use para compatibilidade com nomes antigos:
```json
{
  "aliases": {
    "fechar": "close",          // PT → EN
    "fechaTudo": "closeAll",    // Nome antigo
    "config": "engrenagem"     // Apelido
  }
}
```

## 🔍 Troubleshooting

### Ícone não aparece
1. Nome está em minúsculo?
2. Categoria correta no JSON?
3. Caminho do `path` está escapado?

### Cores erradas
```json
// Se precisa de cor específica, use componente .vue
// Se deve ser dinâmico, use currentColor no JSON
```

### Tamanho estranho
```json
{
  "viewBox": "0 0 24 24",  // Importante!
  "size": 24               // Tamanho padrão
}
```

## 📊 Decisão: JSON vs Componente

```
┌─────────────────────────────────────┐
│ Precisa de cores específicas?       │
├─────────────────────────────────────┤
│ SIM → Componente .vue              │
│ NÃO → Continue...                   │
└─────────────────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│ Usa gradientes ou filtros?          │
├─────────────────────────────────────┤
│ SIM → Componente .vue              │
│ NÃO → Continue...                   │
└─────────────────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│ Usa apenas currentColor/stroke?     │
├─────────────────────────────────────┤
│ SIM → icons.json ✅                │
│ NÃO → Componente .vue              │
└─────────────────────────────────────┘
```

## 🚀 Exemplo Completo

### Adicionar ícone "heart"

```json
// icons.json
{
  "ui": {
    "heart": {
      "viewBox": "0 0 24 24",
      "paths": [
        "<path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>"
      ],
      "size": 24
    }
  }
}
```

```vue
<!-- Usar -->
<template>
  <Icon name="heart" :size="32" class="text-red-500" />
</template>
```

---

**💬 Dúvidas?** Consulte [README.md](./README.md) ou [MIGRATION-ICONS.md](../../MIGRATION-ICONS.md)
