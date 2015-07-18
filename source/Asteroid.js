var DP = DP || {};

DP.Asteroid = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  this.distanceToNH = 0;
};
DP.Asteroid.prototype = Object.create(DP.Actor.prototype);
DP.Asteroid.constructor = DP.Asteroid;

DP.Asteroid.prototype.update = function () {
  'use strict';
  var distance = Math.sqrt(
    Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)
  );
  if (distance > this.speed * 25) {
    this.x += (this.targetX - this.x) * (this.speed / distance);
    this.y += (this.targetY - this.y) * (this.speed / distance);
  } else {
    this.x += (this.targetX - this.x) / 25;
    this.y += (this.targetY - this.y) / 25;
  }
  if (this.x < -50) {
    this.reset();
  }
  this.distanceToNH = Math.sqrt(
    Math.pow(DP.NH.x - this.x, 2) + Math.pow(DP.NH.y - this.y, 2)
  );
  if (this.distanceToNH < this.width / 2) {
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
  }
};

DP.Asteroid.prototype.reset = function () {
  'use strict';
  var size;
  this.x = Math.random() * 1024 + 1000;
  this.y = Math.random() * 768;
  size = Math.random() * 50 + 50;
  this.width = size;
  this.height = size;
  this.targetX = -1000;
  this.targetY = this.y;
};
