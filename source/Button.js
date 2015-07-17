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
    this.X + (
      this.ALIGN === 'right' ? this.WIDTH : (
        this.ALIGN === 'center' ? this.WIDTH / 2 : 0
      )
    ),
    this.Y + this.HEIGHT / 2
  );
};

DP.Button.prototype.handleEvent = function (e) {
  'use strict';
  var x, y;
  x = e.offsetX === undefined ? e.clientX - this.canvas.offsetLeft : e.offsetX;
  y = e.offsetX === undefined ? e.clientY - this.canvas.offsetTop : e.offsetY;
  if (x > this.X && x < this.X + this.WIDTH &&
      y > this.Y && y < this.Y + this.HEIGHT) {
    this.onclick();
  }
};
