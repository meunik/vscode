<template>
  <svg
    :width="size || iconData?.size || 24"
    :height="size || iconData?.size || 24"
    :viewBox="iconData?.viewBox || '0 0 24 24'"
    :fill="iconData?.fill || 'currentColor'"
    :stroke="iconData?.stroke ? 'currentColor' : 'none'"
    :stroke-width="iconData?.stroke ? 2 : 0"
    :stroke-linecap="iconData?.stroke ? 'round' : undefined"
    :stroke-linejoin="iconData?.stroke ? 'round' : undefined"
    :class="['icon', { active: ativo }, props.class]"
    :style="{ transform: `rotate(${rotate}deg)`, ...parseEstilo }"
    v-html="iconData?.content || ''"
  ></svg>
</template>

<script setup>
import { computed } from 'vue';
import iconsData from './icons.json';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: null },
  rotate: { type: Number, default: 0 },
  ativo: { type: Boolean, default: false },
  estilo: { type: [String, Object], default: '' },
  class: { type: String, default: '' },
});

const iconData = computed(() => {
  const iconName = iconsData.aliases?.[props.name] || props.name;

  for (const category of Object.values(iconsData)) {
    if (typeof category === 'object' && category[iconName]) return category[iconName];
  }
  
  return null;
});

const parseEstilo = computed(() => {
  if (typeof props.estilo === 'object') return props.estilo;
  return {};
});
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  transition: opacity 0.2s;
}

.icon.active {
  opacity: 1;
}
</style>
