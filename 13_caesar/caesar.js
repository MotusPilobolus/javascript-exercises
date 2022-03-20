const caesar = function(phrase, num) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newalpha = "";

function shiftPositive(n) {
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset]; } 
}

function shiftNegative(n) {
    for (let i = 0; i < alphabet.length; i++) {
        let offset = (i + n) % alphabet.length;
        if (offset < 0) {offset = 26 + offset}
        newalpha += alphabet[offset]; }
}

function shift(n) {
    if ( n > 0 ) { shiftPositive(n) } 
        else { shiftNegative(n) }
  }

function encode(message) {
    let result = "";
    messageLower = message.toLowerCase();
    for (let i = 0; i < message.length; i++) {
        let index = alphabet.indexOf(messageLower[i]);
        if ( index == -1 ) { result += message[i] }
        else if (message[i] == messageLower[i]) { result += newalpha[index]; }
        else { result += newalpha[index].toUpperCase(); }
    }
    return result;
}

shift(num);
return encode(phrase);
};

// Do not edit below this line
module.exports = caesar;
