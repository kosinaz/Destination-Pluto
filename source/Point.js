var DP = DP || {};

DP.Point = function (args) {
  'use strict';
  DP.Label.call(this, args);
  this.alpha = 0;
};
DP.Point.prototype = Object.create(DP.Label.prototype);
DP.Point.constructor = DP.Point;

DP.Point.prototype.draw = function () {
  'use strict';
  if (this.alpha > 0) {
    DP.CTX.globalAlpha = this.alpha;
    DP.CTX.fillStyle = this.COLOR;
    DP.CTX.font = this.FONTSIZE + ' "Russo One"';
    DP.CTX.textAlign = this.ALIGN;
    DP.CTX.textBaseline = 'middle';
    DP.CTX.fillText(
      this.value,
      this.x,
      this.y + this.height / 2
    );
    DP.CTX.globalAlpha = 1;
  }
};

DP.Point.prototype.update = function () {
  'use strict';
  if (this.alpha > 0) {
    this.alpha -= 0.005;
    this.y -= 1;
  }
};
