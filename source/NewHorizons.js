var DP = DP || {};

DP.NewHorizons = function (args) {
  'use strict';
  DP.Actor.call(this, args);
  window.addEventListener('mousemove', this);
};
DP.NewHorizons.prototype = Object.create(DP.Actor.prototype);
DP.NewHorizons.constructor = DP.NewHorizons;

DP.NewHorizons.prototype.handleEvent = function (e) {
  'use strict';
  var x, y;
  this.targetX =
    e.offsetX === undefined ? e.clientX - this.canvas.offsetLeft : e.offsetX;
  this.targetY =
    e.offsetX === undefined ? e.clientY - this.canvas.offsetTop : e.offsetY;
};
