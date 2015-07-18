var DP = DP || {};

DP.Button = function (args) {
  'use strict';
  DP.Label.call(this, args);
  this.onclick = function () {};
  this.clicked = false;
  window.addEventListener('click', this);
};
DP.Button.prototype = Object.create(DP.Label.prototype);
DP.Button.constructor = DP.Button;

DP.Button.prototype.draw = function () {
  'use strict';
  var x = this.x;
  if (this.BGCOLOR !== undefined) {
    DP.CTX.fillStyle = this.BGCOLOR;
    DP.CTX.globalAlpha = this.BGALPHA;
    x -= this.ALIGN === 'right' ? this.width : 0;
    x -= this.ALIGN === 'center' ? this.width / 2 : 0;
    DP.CTX.fillRect(x - 4, this.y, this.width + 8, this.height);
    DP.CTX.globalAlpha = 1;
  }
  DP.CTX.strokeStyle = this.COLOR;
  DP.CTX.strokeRect(
    x - 4,
    this.y,
    this.width + 8,
    this.height
  );
  DP.CTX.fillStyle = this.COLOR;
  DP.CTX.font = this.FONTSIZE + ' Spaceship';
  DP.CTX.textAlign = this.ALIGN;
  DP.CTX.textBaseline = 'middle';
  DP.CTX.fillText(
    this.value,
    this.x,
    this.y + this.height / 2
  );
};

DP.Button.prototype.update = function () {
  'use strict';
  if (this.clicked) {
    this.clicked = false;
    this.onclick();
  }
};

DP.Button.prototype.handleEvent = function (e) {
  'use strict';
  var x, y;
  x = e.offsetX === undefined ? e.clientX - this.canvas.offsetLeft : e.offsetX;
  y = e.offsetX === undefined ? e.clientY - this.canvas.offsetTop : e.offsetY;
  if (x > this.x - this.width / 2 && x < this.x + this.width / 2 &&
      y > this.y && y < this.y + this.height) {
    this.clicked = true;
  }
};
