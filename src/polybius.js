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

   const reverseLookup = {
      "11": "a",
      "21": "b",
      "31": "c",
      "41": "d",
      "51": "e",
      "12": "f",
      "22": "g",
      "32": "h",
      "42": "(i/j)",
      "52": "k",
      "13": "l",
      "23": "m",
      "33": "n",
      "43": "o",
      "53": "p",
      "14": "q",
      "24": "r",
      "34": "s",
      "44": "t",
      "54": "u",
      "15": "v",
      "25": "w",
      "35": "x",
      "45": "y",
      "55": "z",
      " ": " "
    }
   
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
      const noSpaceInput = input.toString().replace(" ","")
      if(noSpaceInput.length % 2 === 1) { 
        return false
      }
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
            result += input[i]
            i -= 1
        }
        else {
          const firstValue = input[i]
          const secondValue = input[i+1]
          const lookupKey = `${firstValue}${secondValue}`  
          result += reverseLookup[lookupKey]
        }
      }      
    }
    return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };