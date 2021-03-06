var DP = DP || {};

DP.Asteroid = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  this.distanceToNH = 0;
  this.originX = args.x;
  this.originY = args.y;
  this.reset();
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
    this.IMAGE_X,
    this.IMAGE_Y,
    150,
    150,
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

DP.Asteroid.prototype.reset = function () {
  'use strict';
  var size;
  this.x = Math.random() * 1024 + this.originX * 1024;
  this.y = Math.random() * 768 + this.originY * 768;
  size = Math.random() * 100 + 50;
  this.width = size;
  this.height = size;
  this.targetX = this.x - this.originX * 2048;
  this.targetY = this.y - this.originY * 2048;
  this.speed = Math.random() * 4 + 2;
  this.IMAGE_X = (this.originX + 1) * 200;
  this.IMAGE_Y = (this.originY + 1) * 200;
};
