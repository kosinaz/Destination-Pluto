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
};

DP.update = function () {
  'use strict';
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
