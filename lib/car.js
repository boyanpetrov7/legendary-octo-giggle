function Car() {
	this.wheels = 4;
}

Car.prototype.startEngine = function () {
  return true;
};

Car.prototype.isDriving = function () {
  return this.startEngine() && true;
};

module.exports = Car;