// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = {
    'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51',
    'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52',
    'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53',
    'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54',
    'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55',
    ' ': ' '
  };

  function polybius(input, encode = true) {
    const isOddLength = (input.match(/\d/g) || []).length % 2 !== 0;

    
    if (!encode && isOddLength) return false;

    let result = '';

    
    if (encode) {
      for (let char of input) {
        if (polybiusSquare[char.toLowerCase()]) {
          result += polybiusSquare[char.toLowerCase()];
        } else {
          result += char; 
        }
      }
    } else { 
      let i = 0;
      while (i < input.length) {
        if (input[i] === ' ') {
          result += input[i];
          i++;
        } else {
          const pair = input.slice(i, i + 2);
          if (Object.values(polybiusSquare).includes(pair)) {
            result += Object.keys(polybiusSquare).find(key => polybiusSquare[key] === pair);
            i += 2;
          } else {
            return false; 
          }
        }
      }
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
