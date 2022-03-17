const palindromes = function (string) {
  var stringStripped = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  var stringReverse = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase().split("").reverse().join("");
  console.log(stringReverse, stringStripped);
  if (stringStripped === stringReverse) {return true} else {return false} 
};

// Do not edit below this line
module.exports = palindromes;
