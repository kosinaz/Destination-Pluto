var DP = DP || {};

DP.Label = function (args) {
  'use strict';
  DP.Element.call(this, args);
  this.COLOR = args.COLOR || '#fc0';
  this.BGCOLOR = args.BGCOLOR || '#000';
  this.BGALPHA = args.BGALPHA || '0.75';
  this.FONTSIZE = args.FONTSIZE || '50px';
  this.ALIGN = args.ALIGN || 'left';
  this.textX = this.x;
  this.textY = this.y + this.height / 2;
  if (this.ALIGN === 'center') {
    this.x -= this.width / 2;
  }
  if (this.ALIGN === 'right') {
    this.x -= this.width;
  }
  this.value = args.value || '';
};
DP.Label.prototype = Object.create(DP.Element.prototype);
DP.Label.constructor = DP.Label;

DP.Label.prototype.draw = function () {
  'use strict';
  if (this.BGCOLOR !== undefined) {
    DP.CTX.fillStyle = this.BGCOLOR;
    DP.CTX.globalAlpha = this.BGALPHA;
    DP.CTX.fillRect(this.x - 4, this.y, this.width + 8, this.height);
    DP.CTX.globalAlpha = 1;
  }
  DP.CTX.fillStyle = this.COLOR;
  DP.CTX.font = this.FONTSIZE + ' spaceship';
  DP.CTX.textAlign = this.ALIGN;
  DP.CTX.textBaseline = 'middle';
  DP.CTX.fillText(this.value, this.textX, this.textY);
};
