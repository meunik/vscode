import store from '../store/store'

/**
 * drag-right tem q ter flex-1
 */
export function dragbar() {
  let main = document.getElementById('main');
  let left = document.getElementById('drag-left');
  let bar = document.getElementById('dragbar');
  let mainWidth = main.clientWidth;
  let bodyWidth = document.body.clientWidth;

  const drag = (e) => {
    let wh = ((bodyWidth - mainWidth)/2)+50
    let widthBar = e.pageX - wh;
    let max = (50/100)*mainWidth;
    let navegacaoWidthMin = store.getters.navegacaoWidthMin;
    let min = (navegacaoWidthMin) ? navegacaoWidthMin : (10/100)*mainWidth;
    
    if (bodyWidth > 768) {
      if ((min <= widthBar)&&(widthBar <= max)) {
        store.commit('navegacaoWidth', `${widthBar}px`);
      } else if (navegacaoWidthMin && (min > widthBar)) {
        store.commit('navegacaoWidth', `${navegacaoWidthMin}px`);
      } else if (navegacaoWidthMin && (widthBar > max)) {
        store.commit('navegacaoWidth', `${max}px`);
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
  let bar = document.getElementById('dragbarVertical');

  const drag = (e) => {
    let main = document.getElementById('editoresAbertos');
    let divFilha = main.children[0];
    let mainHeight = main.clientHeight;
    let bodyHeight = document.body.clientHeight;

    let hg = mainHeight + 113
    let heightBar = (e.pageY - hg)+mainHeight;
    let max = 0;
    let min = 0;

    if (divFilha) {
      min = (divFilha.clientHeight < 200) ? divFilha.clientHeight : 200;
      max = (50/100)*bodyHeight;
    }

    if ((min < heightBar)&&(heightBar < max)) {
      main.style.height = `${heightBar}px`;
    } else if (min > heightBar) {
      main.style.height = `${min}px`;
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