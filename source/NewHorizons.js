var DP = DP || {};

DP.NewHorizons = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  this.camera = 100;
};
DP.NewHorizons.prototype = Object.create(DP.Actor.prototype);
DP.NewHorizons.constructor = DP.NewHorizons;

DP.NewHorizons.prototype.update = function () {
  'use strict';
  var distance;
  this.targetX = DP.mouseX;
  this.targetY = DP.mouseY;
  distance = Math.sqrt(
    Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)
  );
  if (distance > this.speed * 25) {
    this.x += (this.targetX - this.x) * (this.speed / distance);
    this.y += (this.targetY - this.y) * (this.speed / distance);
  } else {
    this.x += (this.targetX - this.x) / 25;
    this.y += (this.targetY - this.y) / 25;
  }
  if (this.camera < 100) {
    this.camera += 0.5;
    DP.INGAME.ELEMENTS.CAMERA_PERCENT.value = Math.round(this.camera) + '%';
  } else if (DP.mousedown && this.camera === 100) {
    DP.INGAME.ELEMENTS.FLASH.alpha = 1;
    this.camera = 0;
  }
};
