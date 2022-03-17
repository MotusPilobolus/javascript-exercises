const fibonacci = function(num) {
    var i,
    fib = []; 
    fib[0] = 0;
    fib[1] = 1;

    if ( num <= 0 ) {return "OOPS"} 
    else {
    for (i = 2; i <= num; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib.pop(); }
};

// Do not edit below this line
module.exports = fibonacci;
