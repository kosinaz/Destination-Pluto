var DP = DP || {};

DP.Planet = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  this.point = new DP.Point({
    x: this.x,
    y: this.y,
    width: 50,
    height: 50,
    ALIGN: 'center'
  });
};
DP.Planet.prototype = Object.create(DP.Actor.prototype);
DP.Planet.constructor = DP.Planet;

DP.Planet.prototype.draw = function () {
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
DP.Planet.prototype.update = function () {
  'use strict';
  this.x -= 2;
  this.distanceToNH = Math.sqrt(
    Math.pow(DP.NH.x - this.x, 2) + Math.pow(DP.NH.y - this.y, 2)
  );
  if (DP.INGAME.ELEMENTS.FLASH.alpha === 0.9) {
    this.point.value = Math.round(this.width / this.distanceToNH * 30);
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
