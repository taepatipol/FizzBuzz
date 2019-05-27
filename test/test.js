var indexFunc = require('../index.js');
var assert = require('assert');

describe('indexFunc',function(){
    describe('fizzbuxzzfunc',function(){
        it('should return FizzBuzz when %15 == 0',function(){
            assert.equal(indexFunc.fizzbuzzfunc(15),'FizzBuzz');
            assert.equal(indexFunc.fizzbuzzfunc(30),'FizzBuzz');
        })
        it('should return Fizz when %3 == 0',function(){
            assert.equal(indexFunc.fizzbuzzfunc(3),'Fizz');
            assert.equal(indexFunc.fizzbuzzfunc(69),'Fizz');
        })
        it('should return Buzz when %5 == 0',function(){
            assert.equal(indexFunc.fizzbuzzfunc(5),'Buzz');
            assert.equal(indexFunc.fizzbuzzfunc(25),'Buzz');
        })
    })
});