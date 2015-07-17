var DP = DP || {};

DP.Screen = function (args) {
  'use strict';
  var i, e;
  this.BGCOLOR = args.BGCOLOR;
  if (args.IMAGE) {
    this.IMAGE = document.createElement('img');
    this.IMAGE.src = args.IMAGE;
  }
  this.MUSIC = args.MUSIC;
  this.ELEMENTS = {};
  for (i in args.ELEMENTS) {
    if (args.ELEMENTS.hasOwnProperty(i)) {
      if (DP.hasOwnProperty(args.ELEMENTS[i].TYPE)) {
        this.ELEMENTS[i] = new DP[args.ELEMENTS[i].TYPE](args.ELEMENTS[i]);
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
