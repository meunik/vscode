import store from '@/store/store';

export async function imagens() {
  const resultado = [];
  const r = require.context('@/assets/img/1080/');
  r.keys().forEach(e => {
    let arquivo = e.replace('./', '')
    let image = new Image();

    image.src = require(`@/assets/img/1080/${arquivo}`);
    image.onload = function() {
      resultado.push({
        largeURL: require(`@/assets/img/1080/${arquivo}`),
        thumbnailURL: require(`@/assets/img/200/${arquivo}`),
        width: this.width,
        height: this.height,
      })
    }
  });
  return resultado;
}