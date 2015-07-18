var DP = DP || {};

DP.AsteroidField = function (args) {
  'use strict';
  var i, x, y, size;
  this.density = args.density;
  this.asteroids = [];
};

DP.AsteroidField.prototype.addAsteroids = function () {
  'use strict';
  while (this.asteroids.length < this.density) {
    this.asteroids.push(new DP.Asteroid({
      x: -100,
      targetX: -1000,
      speed: 3,
      IMAGE: 'images/resources/Asteroid.svg'
    }));
  }
};

DP.AsteroidField.prototype.draw = function () {
  'use strict';
  var i;
  for (i = 0; i < this.asteroids.length; i += 1) {
    this.asteroids[i].draw();
  }
};

DP.AsteroidField.prototype.update = function () {
  'use strict';
  var i, size;
  this.addAsteroids();
  for (i = 0; i < this.asteroids.length; i += 1) {
    this.asteroids[i].update();
  }
};
