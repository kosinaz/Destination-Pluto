var DP = DP || {};

DP.Label = function (args) {
  'use strict';
  DP.UIElement.call(this, args);
  this.COLOR = args.COLOR || '#fc0';
  this.FONTSIZE = args.FONTSIZE || '50px';
  this.ALIGN = args.ALIGN || 'left';
  this.value = args.value || '';
};
DP.Label.prototype = Object.create(DP.UIElement.prototype);
DP.Label.constructor = DP.Label;

DP.Label.prototype.draw = function () {
  'use strict';
  DP.CTX.fillStyle = this.COLOR;
  DP.CTX.font = this.FONTSIZE + ' Spaceship';
  DP.CTX.textAlign = this.ALIGN;
  DP.CTX.textBaseline = 'middle';
  DP.CTX.fillText(
    this.value,
    this.X + (this.ALIGN === 'right' ? this.WIDTH : 0),
    this.Y + this.HEIGHT / 2
  );
};
