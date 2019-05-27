const indexFunc = require('../index.js');
const assert = require('assert');

describe('indexFunc', function() {
  describe('fizzbuxzzfunc', function() {
    it('should return Fizz if  3', function() {
      assert.equal(indexFunc.fizzbuzzfunc(3), 'Fizz');
    });
    it('should return Buzz if 5', function() {
      assert.equal(indexFunc.fizzbuzzfunc(5), 'Buzz');
    });
    it('should return FizzBuzz if 15', () => {
      assert.equal(indexFunc.fizzbuzzfunc(15), 'FizzBuzz');
    });
    it('should return 1 if 1', () => {
      assert.equal(indexFunc.fizzbuzzfunc(1), 1);
    });
    it('should return 2 if 2', () => {
      assert.equal(indexFunc.fizzbuzzfunc(2), 2);
    });
    it('should return Fizz if  6', function() {
      assert.equal(indexFunc.fizzbuzzfunc(6), 'Fizz');
    });
  });
});
