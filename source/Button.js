var DP = DP || {};

DP.Button = function (args) {
  'use strict';
  DP.Label.call(this, args);
  this.onclick = function () {};
};
DP.Button.prototype = Object.create(DP.Label.prototype);
DP.Button.constructor = DP.Button;

DP.Button.prototype.draw = function () {
  'use strict';
  if (this.BGCOLOR !== undefined) {
    DP.CTX.fillStyle = this.BGCOLOR;
    DP.CTX.globalAlpha = this.BGALPHA;
    DP.CTX.fillRect(this.x - 4, this.y, this.width + 8, this.height);
    DP.CTX.globalAlpha = 1;
  }
  DP.CTX.strokeStyle = this.COLOR;
  DP.CTX.strokeRect(this.x - 4, this.y, this.width + 8, this.height);
  DP.CTX.fillStyle = this.COLOR;
  DP.CTX.font = this.FONTSIZE + ' spaceship';
  DP.CTX.textAlign = this.ALIGN;
  DP.CTX.textBaseline = 'middle';
  DP.CTX.fillText(this.value, this.textX, this.textY);
};

DP.Button.prototype.update = function () {
  'use strict';
  if (DP.mousedown &&
      DP.mouseX > this.x / 2 &&
      DP.mouseX < this.x + this.width &&
      DP.mouseY > this.y &&
      DP.mouseY < this.y + this.height) {
    this.onclick();
  }
};
