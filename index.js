const indexFunc = {};

indexFunc.fizzbuzzfunc = function(x) {
  if (x == 5) {
    return 'Buzz';
  }
  return 'Fizz';
};

module.exports = indexFunc;

// for (x = 1; x <= 100; x++) {
//     console.log(fizzbuzzfunc(x));
// }
