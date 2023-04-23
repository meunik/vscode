<template>
  <div class="topo d-flex align-items-center justify-content-between px-3">
    <div class="d-flex align-items-center gap-bolinhas">
      <Icone
        icone="circulo"
        :tamanho="15"
        estilo="color: #ED6A5E !important;"
        classesSegundaDiv="d-flex justify-content-center"
      />
      <Icone
        icone="circulo"
        :tamanho="15"
        estilo="color: #F4BF4F !important;"
        classesSegundaDiv="d-flex justify-content-center"
      />
      <Icone
        icone="circulo"
        :tamanho="15"
        estilo="color: #61C554 !important;"
        classesSegundaDiv="d-flex justify-content-center"
      />
    </div>
    <span>Marcos Paulo</span>
    <div class="w-espacinho">&nbsp;</div>
  </div>
</template>

<script>
  import Icone from '@/assets/svg/Icone.vue';
  export default {
    components: {
      Icone,
    }
  }
</script>

<style>
.circulo {
  border-radius: 50px !important;
}
.gap-bolinhas {
  gap: 0.25rem;
}
.w-bolinhas {
  width: 12px !important;
}
.h-bolinhas {
  height: 12px !important;
}
.w-espacinho {
  width: 3.5rem !important;
}
</style>