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
  DP.screen.ELEMENTS.NEW_MISSION.onclick = DP.newMission;
};

DP.changeScreen = function (screen) {
  'use strict';
  DP.screen = screen;
  document.getElementById('music').src = DP.screen.MUSIC;
  document.getElementById('music').play();
};

DP.gameOver = function () {
  'use strict';
  DP.screen.ELEMENTS.LOST = new DP.Label({
    "x": 512,
    "y": 334,
    "width": 700,
    "height": 50,
    "ALIGN": "center",
    "value": "Connection lost..."
  });
  DP.screen.ELEMENTS.FINAL = new DP.Label({
    "x": 512,
    "y": 384,
    "width": 700,
    "height": 50,
    "ALIGN": "center",
    "value": "Final scientific value of the mission:"
  });
  DP.screen.ELEMENTS.VALUE = new DP.Label({
    "x": 512,
    "y": 434,
    "width": 700,
    "height": 50,
    "ALIGN": "center",
    "value": DP.screen.ELEMENTS.SCIENCE_COUNTER.value
  });
  DP.screen.draw();
  DP.changeScreen(DP.GAMEOVER);
  DP.screen.ELEMENTS.NEW_MISSION.onclick = DP.newMission;
};

DP.newMission = function () {
  'use strict';
  DP.changeScreen(DP.INGAME);
  DP.screen.init();
  DP.NH = DP.screen.ELEMENTS.NEW_HORIZONS;
  DP.screen.ELEMENTS.DISTANCE_COUNTER.distance = 3000;
  DP.screen.ELEMENTS.DISTANCE_COUNTER.update = function () {
    this.distance -= 0.1;
    this.value = Math.round(this.distance) + ' million miles';
  };
  DP.screen.ELEMENTS.SCIENCE_COUNTER.science = 0;
  DP.screen.ELEMENTS.SCIENCE_COUNTER.update = function () {
    this.value = this.science || '0';
  };
};
