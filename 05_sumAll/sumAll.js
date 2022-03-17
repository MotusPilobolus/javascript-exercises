const sumAll = function(first,second) {
    var array = [], lowEnd = 0, highEnd = 0;
    function isAnInteger(x) { return Number.isInteger(x) == false; }
    
    if (first <= 0 || second <= 0 || isAnInteger(first) || isAnInteger(second)) {return 'ERROR'} 
    
    else if (first < second) { lowEnd = first; highEnd = second} else { lowEnd = second; highEnd = first;}
    
    for (var i = lowEnd; i <= highEnd; i++) { array.push(i); }

    return array.reduce(function(a, b) { return a + b; }, 0)

};

// Do not edit below this line
module.exports = sumAll;
