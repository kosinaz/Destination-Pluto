var DP = DP || {};

DP.init = function () {
  'use strict';
  DP.CANVAS = document.getElementById('DP');
  DP.CTX = DP.CANVAS.getContext('2d');
  DP.request('data/screens.json', DP.loadScreens);
  setInterval(function () {
    DP.update();
    DP.draw();
  }, 10);
  window.addEventListener('mousedown', this);
  window.addEventListener('mouseup', this);
  window.addEventListener('mousemove', this);
};

DP.update = function () {
  'use strict';
  DP.mousedown = DP.down;
  DP.mouseX = DP.x;
  DP.mouseY = DP.y;
  if (DP.screen) {
    DP.screen.update();
  }
};

DP.draw = function () {
  'use strict';
  if (DP.screen) {
    DP.screen.draw();
  }
};

DP.handleEvent = function (e) {
  'use strict';
  if (e.type === 'mousedown') {
    DP.down = true;
  }
  if (e.type === 'mouseup') {
    DP.down = false;
  }
  if (e.type === 'mousemove') {
    DP.x = e.clientX - DP.CANVAS.offsetLeft;
    DP.y = e.clientY - DP.CANVAS.offsetTop;
  }
};
