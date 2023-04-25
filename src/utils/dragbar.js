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

    if (bodyWidth > 768) {
      if ((min < widthBar)&&(widthBar < max)) {
        store.commit('navegacaoWidth', `${widthBar}px`);
      } else if (min > widthBar) {
        store.commit('navegacaoWidth', '0px');
      }
    }
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

export function dragbarVertical() {
  var main = document.getElementById('editoresAbertos');
  var bar = document.getElementById('dragbarVertical');
  var mainHeight = main.clientHeight;
  var bodyHeight = document.body.clientHeight;

  const drag = (e) => {
    let hg = mainHeight + 77
    let heightBar = (e.pageY - hg)+mainHeight;
    let max = (50/100)*bodyHeight;
    let min = 35;

    if ((min < heightBar)&&(heightBar < max)) {
      main.style.height = `${heightBar}px`;
    }
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

export default {
  dragbar,
  dragbarVertical,
}