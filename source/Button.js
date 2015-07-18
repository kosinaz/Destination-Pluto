var DP = DP || {};

DP.Button = function (args) {
  'use strict';
  DP.Label.call(this, args);
  window.addEventListener('click', this);
};
DP.Button.prototype = Object.create(DP.Label.prototype);
DP.Button.constructor = DP.Button;

DP.Button.prototype.draw = function () {
  'use strict';
  DP.CTX.fillStyle = this.COLOR;
  DP.CTX.font = this.FONTSIZE + ' Spaceship';
  DP.CTX.textAlign = this.ALIGN;
  DP.CTX.textBaseline = 'middle';
  DP.CTX.fillText(
    this.value,
    this.x + (
      this.ALIGN === 'right' ? this.width : (
        this.ALIGN === 'center' ? this.width / 2 : 0
      )
    ),
    this.y + this.height / 2
  );
};

DP.Button.prototype.handleEvent = function (e) {
  'use strict';
  var x, y;
  x = e.offsetX === undefined ? e.clientX - this.canvas.offsetLeft : e.offsetX;
  y = e.offsetX === undefined ? e.clientY - this.canvas.offsetTop : e.offsetY;
  if (x > this.x && x < this.x + this.width &&
      y > this.y && y < this.y + this.height) {
    this.onclick();
  }
};
