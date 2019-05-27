let indexFunc = {};

indexFunc.fizzbuzzfunc = function(x){
    if(x % 3 == 0 && x % 5 == 0){
        return "FizzBuzz";
    }
    else if (x % 3 == 0) {
        return "Fizz";
    }
    else if (x % 5 == 0) {
        return "Buzz";
    }
    else {
        return x;
    }
};

module.exports = indexFunc;

var x;

// for (x = 1; x <= 100; x++) {
//     console.log(fizzbuzzfunc(x));
// }