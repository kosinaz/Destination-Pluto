var DP = DP || {};

DP.Starfield = function (args) {
  'use strict';
  var i, x, y, size;
  this.stars = [];
  for (i = 0; i < args.density || 0; i += 1) {
    x = Math.random() * 1024;
    y = Math.random() * 768;
    size = Math.random() * 10;
    this.stars.push(new DP.Actor({
      x: x,
      y: y,
      width: size,
      height: size,
      speed: size / 10,
      targetX: -1000,
      targetY: y,
      IMAGE: 'images/resources/Star.svg'
    }));
  }
};

DP.Starfield.prototype.draw = function () {
  'use strict';
  var i;
  for (i = 0; i < this.stars.length; i += 1) {
    this.stars[i].draw();
  }
};

DP.Starfield.prototype.update = function () {
  'use strict';
  var i, size;
  for (i = 0; i < this.stars.length; i += 1) {
    if (this.stars[i].x < -50) {
      this.stars[i].x = 1024;
      this.stars[i].y = Math.random() * 768;
      size = Math.random() * 10;
      this.stars[i].width = size;
      this.stars[i].height = size;
      this.stars[i].speed = size / 10;
      this.stars[i].targetY = this.stars[i].y;
    }
    this.stars[i].update();
  }
};
