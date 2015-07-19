var DP = DP || {};

DP.MagneticAsteroid = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  this.distanceToNH = 0;
  this.reset();
  this.targetX = this.x - 2048;
  this.IMAGE_X = 200;
  this.IMAGE_Y = 200;
  this.point = new DP.Point({
    x: this.x,
    y: this.y,
    width: 50,
    height: 50,
    ALIGN: 'center'
  });
};
DP.MagneticAsteroid.prototype = Object.create(DP.Asteroid.prototype);
DP.MagneticAsteroid.constructor = DP.MagneticAsteroid;

DP.MagneticAsteroid.prototype.update = function () {
  'use strict';
  this.targetY = DP.NH.y;
  var distance = Math.sqrt(
    Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)
  );
  if (distance > this.speed * 25) {
    this.x += (this.targetX - this.x) * (this.speed / distance);
    this.y += (this.targetY - this.y) * (this.speed / distance);
  } else {
    this.reset();
  }
  this.distanceToNH = Math.sqrt(
    Math.pow(DP.NH.x - this.x, 2) + Math.pow(DP.NH.y - this.y, 2)
  );
  if (this.distanceToNH < this.width / 2) {
    DP.gameOver();
  } else if (DP.INGAME.ELEMENTS.FLASH.alpha === 0.9) {
    this.point.value = Math.round(this.width / this.distanceToNH * 3);
    if (this.point.value !== 0) {
      this.point.alpha = 1;
      DP.INGAME.ELEMENTS.SCIENCE_COUNTER.science += this.point.value;
    }
  } else if (this.point.alpha < 0.1) {
    this.point.x = this.x;
    this.point.y = this.y - this.height / 2;
  }
  this.point.update();
};

DP.MagneticAsteroid.prototype.reset = function () {
  'use strict';
  var size;
  this.x = Math.random() * 1024 + 1024;
  this.y = Math.random() * 768;
  size = Math.random() * 100 + 50;
  this.width = size;
  this.height = size;
  this.speed = Math.random() * 4 + 2;
};
