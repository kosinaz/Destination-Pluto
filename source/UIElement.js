var DP = DP || {};

DP.UIElement = function (args) {
  'use strict';
  this.X = args.X;
  this.Y = args.Y;
  this.WIDTH = args.WIDTH;
  this.HEIGHT = args.HEIGHT;
};

DP.UIElement.prototype.draw = function () {
  'use strict';
  DP.CTX.fillRect(this.x, this.y, this.width, this.height);
};
