export function moverDiv(id) {
  var container = document.querySelector(`.container-${id}`);
  var objeto = document.querySelector(`.objeto-${id}`);

  var state = { distX: 0, distY: 0 };

  function onDown(e) {
    document.querySelector(`.container-${id}`).style.cursor = 'grabbing';
    const input = document.querySelector(`.textarea-${id}`);
    input.focus();
    e.preventDefault();
    
    var evt = e.type === 'touchstart' ? e.changedTouches[0] : e;
    
    state.distX = Math.abs(objeto.offsetLeft - evt.clientX);
    state.distY = Math.abs(objeto.offsetTop - evt.clientY);
    
    objeto.style.pointerEvents = 'none';
  };
  function onUp(e) {
    objeto.style.pointerEvents = 'initial';
    document.querySelector(`.container-${id}`).style.cursor = 'initial';
  };
  function onMove(e) {
    if (objeto.style.pointerEvents === 'none') {
      var evt = e.type === 'touchmove' ? e.changedTouches[0] : e;
      
      objeto.style.left = `${evt.clientX - state.distX}px`;
      objeto.style.top = `${evt.clientY - state.distY}px`;
    };
  };

  objeto.addEventListener('mousedown', onDown);
  container.addEventListener('mousemove', onMove);
  container.addEventListener('mouseup', onUp);

  objeto.addEventListener('touchstart', onDown);
  container.addEventListener('touchmove', onMove);
  container.addEventListener('touchend', onUp);

  container.addEventListener('touchmove', onMove);
}