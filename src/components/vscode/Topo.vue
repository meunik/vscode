<template>
  <div class="topo d-flex align-items-center justify-content-between px-3">
    <div class="d-flex align-items-center gap-bolinhas">
      <button
        type="button"
        class="w-bolinhas h-bolinhas bg-vermelho circulo"
      ></button
      ><button
        type="button"
        class="w-bolinhas h-bolinhas bg-amarelo circulo"
      ></button
      ><button
        type="button"
        class="w-bolinhas h-bolinhas bg-verde circulo"
      ></button>
    </div>
    <span>Marcos Paulo</span>
    <div class="w-espacinho">&nbsp;</div>
  </div>
</template>

<style>
.circulo {
  border-radius: 50px !important;
}
.gap-bolinhas {
  gap: 0.5rem;
}
.w-bolinhas {
  width: 0.75rem !important;
}
.h-bolinhas {
  height: 0.75rem !important;
}
.w-espacinho {
  width: 3.5rem !important;
}
</style>