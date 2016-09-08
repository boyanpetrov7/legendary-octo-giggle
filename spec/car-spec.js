var Car = require('../lib/car.js');

var testCar;

beforeEach(function() {
    testCar = new Car();
});

describe('a car', function () {
    it('should have 4 wheels', function() {
        expect(testCar.wheels).toEqual(4);
    });
});

describe('a car', function () {
    it('engine should be started', function() {
        expect(testCar.startEngine()).toEqual(true);
    });
});

describe('a car', function () {
    it('calls startEngine() function', function() {
      spyOn(testCar, "startEngine")
      testCar.isDriving();
      expect(testCar.startEngine).toHaveBeenCalled();
    });
});