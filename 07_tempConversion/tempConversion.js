const ftoc = function(f) {
  var n = ( (5/9) * (f-32) )
  return Math.round(n * 10) / 10
};
 
const ctof = function(c) {  
  n = ( 32 + (c * (9/5)) )
  return Math.round(n * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
