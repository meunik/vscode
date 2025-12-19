import { ref, onMounted, onUnmounted } from 'vue'

export function useRedimensionar(larguraInicial = 250, larguraMinima = 180, larguraMaxima = 600) {
  const largura = ref(larguraInicial)
  const redimensionando = ref(false)

  let posicaoInicialX = 0
  let larguraInicialDrag = 0

  const iniciarRedimensionamento = (evento) => {
    redimensionando.value = true
    posicaoInicialX = evento.clientX
    larguraInicialDrag = largura.value

    documento.addEventListener('mousemove', redimensionar)
    documento.addEventListener('mouseup', pararRedimensionamento)
    documento.body.style.cursor = 'ew-resize'
    documento.body.style.userSelect = 'none'
  }

  const redimensionar = (evento) => {
    if (!redimensionando.value) return

    const delta = evento.clientX - posicaoInicialX
    const novaLargura = larguraInicialDrag + delta

    if (novaLargura >= larguraMinima && novaLargura <= larguraMaxima) {
      largura.value = novaLargura
    }
  }

  const pararRedimensionamento = () => {
    redimensionando.value = false
    documento.removeEventListener('mousemove', redimensionar)
    documento.removeEventListener('mouseup', pararRedimensionamento)
    documento.body.style.cursor = ''
    documento.body.style.userSelect = ''
  }

  const documento = typeof document !== 'undefined' ? document : null

  onUnmounted(() => {
    if (documento) {
      documento.removeEventListener('mousemove', redimensionar)
      documento.removeEventListener('mouseup', pararRedimensionamento)
    }
  })

  return {
    largura,
    redimensionando,
    iniciarRedimensionamento
  }
}
