const removeFromArray = function(array,...removeThis) {
 var countToRemove = removeThis.length;
 for (i = 0; i < countToRemove; i++) {
    let spliceHere = array.indexOf(removeThis[i]);
    if (spliceHere === -1) { continue } 
    array.splice(spliceHere, 1)
 } 
 return array;
};

// Do not edit below this line
module.exports = removeFromArray;
