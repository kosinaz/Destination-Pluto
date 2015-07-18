var DP = DP || {};

DP.Flash = function (args) {
  'use strict';
  DP.Actor.call(this, args);
};
DP.Flash.prototype = Object.create(DP.Actor.prototype);
DP.Flash.constructor = DP.Flash;

DP.Flash.prototype.draw = function () {
  'use strict';
  if (this.alpha > 0) {
    DP.CTX.globalAlpha = this.alpha;
    DP.CTX.drawImage(
      this.IMAGE,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    DP.CTX.globalAlpha = 1;
  }
};

DP.Flash.prototype.update = function () {
  'use strict';
  if (this.alpha > 0) {
    this.alpha -= 0.1;
    this.x = DP.NH.x;
    this.y = DP.NH.y;
  }
};
