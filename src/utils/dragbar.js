import store from '../store/store'

/**
 * drag-right tem q ter flex-1
 */
export function dragbar() {
  var main = document.getElementById('main');
  var left = document.getElementById('drag-left');
  var bar = document.getElementById('dragbar');
  var mainWidth = main.clientWidth;
  var bodyWidth = document.body.clientWidth;

  const drag = (e) => {
    let wh = ((bodyWidth - mainWidth)/2)+50
    let widthBar = e.pageX - wh;
    let max = (50/100)*mainWidth;
    let min = (10/100)*mainWidth;

    if ((min < widthBar)&&(widthBar < max)) {
      // left.style.width = `${widthBar}px`;
      store.commit('navegacaoWidth', `${widthBar}px`);
    } else if (min > widthBar) {
      // left.style.width = `0px`;
      store.commit('navegacaoWidth', '0px');
    }

    // console.log('----------------------');
    // console.log(mainWidth, max, min);
    // console.log(e.pageX, wh);
    // console.log(e.pageX - wh);
  }

  bar.addEventListener('mousedown', () => {
    window.getSelection().removeAllRanges();
    document.body.style.userSelect = 'none';
    document.addEventListener('mousemove', drag);
  });
  document.addEventListener('mouseup', () => {
    document.body.style.userSelect = 'auto';
    document.removeEventListener('mousemove', drag);
  });
}