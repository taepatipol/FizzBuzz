const indexFunc = {};

indexFunc.fizzbuzzfunc = function(x) {
  if (x == 5) {
    return 'Buzz';
  } else if (x == 15) {
    return 'FizzBuzz';
  } else if (x == 3) {
    return 'Fizz';
  } else {
    return x;
  }
};

module.exports = indexFunc;

// for (x = 1; x <= 100; x++) {
//     console.log(fizzbuzzfunc(x));
// }
