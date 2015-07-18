var DP = DP || {};

DP.Screen = function (args) {
  'use strict';
  this.args = args;
  this.BGCOLOR = args.BGCOLOR;
  if (args.IMAGE) {
    this.IMAGE = document.createElement('img');
    this.IMAGE.src = args.IMAGE;
  }
  this.MUSIC = args.MUSIC;
  this.init();
};

DP.Screen.prototype.init = function () {
  'use strict';
  var i;
  this.ELEMENTS = {};
  for (i in this.args.ELEMENTS) {
    if (this.args.ELEMENTS.hasOwnProperty(i)) {
      if (DP.hasOwnProperty(this.args.ELEMENTS[i].TYPE)) {
        this.ELEMENTS[i] =
          new DP[this.args.ELEMENTS[i].TYPE](this.args.ELEMENTS[i]);
      }
    }
  }
};

DP.Screen.prototype.draw = function () {
  'use strict';
  var i;
  if (this.BGCOLOR !== undefined) {
    DP.CTX.fillStyle = this.BGCOLOR;
    DP.CTX.fillRect(0, 0, 1024, 768);
  }
  if (this.IMAGE !== undefined) {
    DP.CTX.drawImage(this.IMAGE, 0, 0);
  }
  for (i in this.ELEMENTS) {
    if (this.ELEMENTS.hasOwnProperty(i)) {
      this.ELEMENTS[i].draw();
    }
  }
};

DP.Screen.prototype.update = function () {
  'use strict';
  var i;
  for (i in this.ELEMENTS) {
    if (this.ELEMENTS.hasOwnProperty(i)) {
      this.ELEMENTS[i].update();
    }
  }
};
