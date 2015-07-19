var DP = DP || {};

DP.AsteroidField = function (args) {
  'use strict';
  var i, x, y, size;
  this.density = args.density;
  this.asteroids = [];
};

DP.AsteroidField.prototype.addAsteroids = function () {
  'use strict';
  var asteroid, stage;
  asteroid = {
    IMAGE: 'images/resources/Asteroid.png'
  };
  stage =
    Math.floor((3000 - DP.INGAME.ELEMENTS.DISTANCE_COUNTER.distance) / 500);
  if (stage > 5) {
    if (this.asteroids.length < this.density) {
      if (Math.random() * 10 < 1) {
        this.asteroids.push(new DP.MagneticAsteroid(asteroid));
      }
      stage = Math.floor(Math.random() * 6);
    }
  } else {
    switch (stage) {
    case 0:
      asteroid.x = 1;
      asteroid.y = 0;
      break;
    case 1:
      asteroid.x = 1;
      asteroid.y = -1;
      break;
    case 2:
      asteroid.x = 0;
      asteroid.y = 1;
      break;
    case 3:
      asteroid.x = 0;
      asteroid.y = -1;
      break;
    case 4:
      asteroid.x = -1;
      asteroid.y = 1;
      break;
    case 5:
      asteroid.x = -1;
      asteroid.y = 0;
      break;
    }
  }
  if (this.asteroids.length < this.density) {
    this.asteroids.push(new DP.Asteroid(asteroid));
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
