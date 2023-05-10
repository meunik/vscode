import store from '@/store/store'

export function moverDiv2() {
  var container = document.querySelector('.container');
  var circle = document.querySelector('.circle');

  var state = { distX: 0, distY: 0 };

  function onDown(e) {
    e.preventDefault();
    
    var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
    
    state.distX = Math.abs(circle.offsetLeft - evt.clientX);
    state.distY = Math.abs(circle.offsetTop - evt.clientY);
    
    circle.style.pointerEvents = 'none';
  };
  function onUp(e) {
    circle.style.pointerEvents = 'initial';
  };
  function onMove(e) {
    if (circle.style.pointerEvents === 'none') {
      var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
      
      circle.style.left = `${evt.clientX - state.distX}px`;
      circle.style.top = `${evt.clientY - state.distY}px`;
    };
  };

  circle.addEventListener('mousedown', onDown);
  container.addEventListener('mousemove', onMove);
  container.addEventListener('mouseup', onUp);

  container.addEventListener('touchmove', onMove);
}