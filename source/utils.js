var DP = DP || {};

DP.request = function (path, callback) {
  'use strict';
  var xmlHttpRequest = new XMLHttpRequest();
  xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
      callback(JSON.parse(xmlHttpRequest.responseText));
    }
  };
  xmlHttpRequest.open('GET', path, true);
  xmlHttpRequest.send();
};

DP.loadScreens = function (screens) {
  'use strict';
  var i;
  for (i in screens) {
    if (screens.hasOwnProperty(i)) {
      DP[i] = new DP.Screen(screens[i]);
    }
  }
  DP.changeScreen(DP.TITLE);
  DP.TITLE.ELEMENTS.START.onclick = function () {
    window.removeEventListener("click", this);
    DP.changeScreen(DP.INGAME);
  };
};

DP.changeScreen = function (screen) {
  'use strict';
  DP.screen = screen;
  document.getElementById('music').src = DP.screen.MUSIC;
  document.getElementById('music').play();
};
