import store from '@/store/store'

export function moverDiv() {
  const square = document.querySelector('.square');
  const parent = square.parentNode;
  let isDragging = false;
  let startX, startY, offsetX, offsetY;
  
  square.addEventListener('mousedown', function (e) {
    console.log('mousedown -----------------------------');
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    offsetX = square.offsetLeft;
    offsetY = square.offsetTop;

    console.log('startX: '+startX);
    console.log('startY: '+startY);
    console.log('offsetX: '+offsetX);
    console.log('offsetY: '+offsetY);
  
    const x = e.clientX - startX + offsetX;
    const y = e.clientY - startY + offsetY;
  
    const maxX = parent.offsetWidth - square.offsetWidth;
    const maxY = parent.offsetHeight - square.offsetHeight;

    console.log('--------------');
    console.log('x: '+x);
    console.log('y: '+y);
    console.log('parent.offsetWidth: '+parent.offsetWidth);
    console.log('square.offsetWidth: '+square.offsetWidth);
    console.log('parent.offsetHeight: '+parent.offsetHeight);
    console.log('square.offsetHeight: '+square.offsetHeight);
    console.log('maxX: '+maxX);
    console.log('maxY: '+maxY);

    // if (x < 0) {
    //   square.style.left = '0px';
    // } else if (x > maxX) {
    //   square.style.left = maxX + 'px';
    // } else {
    //   square.style.left = x + 'px';
    // }
  
    // if (y < 0) {
    //   square.style.top = '0px';
    // } else if (y > maxY) {
    //   square.style.top = maxY + 'px';
    // } else {
    //   square.style.top = y + 'px';
    // }
  });
  
  // parent.addEventListener('mousemove', function (e) {
  //   console.log(e.clientX);
  //   if (!isDragging) {
  //     return;
  //   }
  
  //   const x = e.clientX - startX + offsetX;
  //   const y = e.clientY - startY + offsetY;
  
  //   const maxX = parent.offsetWidth - square.offsetWidth;
  //   const maxY = parent.offsetHeight - square.offsetHeight;
  
  //   if (x < 0) {
  //     square.style.left = '0px';
  //   } else if (x > maxX) {
  //     square.style.left = maxX + 'px';
  //   } else {
  //     square.style.left = x + 'px';
  //   }
  
  //   if (y < 0) {
  //     square.style.top = '0px';
  //   } else if (y > maxY) {
  //     square.style.top = maxY + 'px';
  //   } else {
  //     square.style.top = y + 'px';
  //   }
  // });
  
  parent.addEventListener('mouseup', function () {
    isDragging = false;
  });    
}

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