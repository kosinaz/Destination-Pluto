var DP = DP || {};

DP.Actor = function (args) {
  'use strict';
  DP.Element.call(this, args);
  this.targetX = args.targetX || this.x;
  this.targetY = args.targetY || this.y;
  this.speed = args.speed;
  if (args.IMAGE) {
    this.IMAGE = document.createElement('img');
    this.IMAGE.src = args.IMAGE;
  }
};
DP.Actor.prototype = Object.create(DP.Element.prototype);
DP.Actor.constructor = DP.Actor;

DP.Actor.prototype.draw = function () {
  'use strict';
  DP.CTX.drawImage(
    this.IMAGE,
    this.x - this.width / 2,
    this.y - this.height / 2,
    this.width,
    this.height
  );
};

DP.Actor.prototype.update = function () {
  'use strict';
  var distance = Math.sqrt(
    Math.pow(this.targetX - this.x, 2) + Math.pow(this.targetY - this.y, 2)
  );
  if (distance > this.speed) {
    this.x += (this.targetX - this.x) * (this.speed / distance);
    this.y += (this.targetY - this.y) * (this.speed / distance);
  }
};
