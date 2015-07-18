var DP = DP || {};

DP.Label = function (args) {
  'use strict';
  DP.Element.call(this, args);
  this.COLOR = args.COLOR || '#fc0';
  this.FONTSIZE = args.FONTSIZE || '50px';
  this.ALIGN = args.ALIGN || 'left';
  this.value = args.value || '';
};
DP.Label.prototype = Object.create(DP.Element.prototype);
DP.Label.constructor = DP.Label;

DP.Label.prototype.draw = function () {
  'use strict';
  DP.CTX.fillStyle = this.COLOR;
  DP.CTX.font = this.FONTSIZE + ' Spaceship';
  DP.CTX.textAlign = this.ALIGN;
  DP.CTX.textBaseline = 'middle';
  DP.CTX.fillText(
    this.value,
    this.x + (this.ALIGN === 'right' ? this.width : 0),
    this.y + this.height / 2
  );
};
