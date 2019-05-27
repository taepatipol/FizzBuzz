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
  });
});
