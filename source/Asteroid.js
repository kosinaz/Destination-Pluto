var DP = DP || {};

DP.Asteroid = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  this.distanceToNH = 0;
  this.point = new DP.Point({
    x: this.x,
    y: this.y,
    width: 50,
    height: 50,
    ALIGN: 'center'
  });
};
DP.Asteroid.prototype = Object.create(DP.Actor.prototype);
DP.Asteroid.constructor = DP.Asteroid;

DP.Asteroid.prototype.draw = function () {
  'use strict';
  DP.CTX.drawImage(
    this.IMAGE,
    this.x - this.width / 2,
    this.y - this.height / 2,
    this.width,
    this.height
  );
  this.point.draw();
};
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
    DP.gameOver();
  } else if (DP.INGAME.ELEMENTS.FLASH.alpha === 0.9) {
    this.point.value = Math.round(this.width / this.distanceToNH * 3);
    this.point.alpha = 1;
    DP.INGAME.ELEMENTS.SCIENCE_COUNTER.science += this.point.value;
  } else if (this.point.alpha < 0.1) {
    this.point.x = this.x;
    this.point.y = this.y - this.height / 2;
  }
  this.point.update();
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
