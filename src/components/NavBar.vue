<script setup>
import Icon from '@/assets/icons/Icon.vue';
</script>

<template>
  <navbar class="h-full bg-black/50 w-12 flex flex-col gap-0 items-center justify-start noPrint">
    <div class="flex items-center justify-center py-3 w-full hover:text-nav-text border-l-2 border-nav-border text-nav-text">
      <Icon name="explorador" :size="24" />
    </div>
    <div class="flex items-center justify-center py-4 w-full hover:text-nav-text">
      <Icon name="pesquisa" :size="24" />
    </div>
    <div class="flex items-center justify-center py-4 w-full hover:text-nav-text">
      <Icon name="git" :size="24" />
    </div>
    <div class="flex items-center justify-center py-4 w-full hover:text-nav-text">
      <Icon name="extensoes" :size="24" />
    </div>
    <div class="flex items-center justify-center py-4 w-full hover:text-nav-text">
      <Icon name="camera" :size="24" />
    </div>
  </navbar>
  <div class="h-full bg-black/50 w-64 flex flex-col gap-0 items-center justify-start noPrint">
  </div>
</template>