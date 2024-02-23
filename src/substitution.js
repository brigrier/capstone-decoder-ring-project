// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

    const uniqueAlphabet = new Set(alphabet.toLowerCase());
    if (uniqueAlphabet.size !== 26) return false;

    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";

    const encodingMap = {};
    const decodingMap = {};
    for (let i = 0; i < originalAlphabet.length; i++) {
      encodingMap[originalAlphabet[i]] = alphabet[i];
      decodingMap[alphabet[i]] = originalAlphabet[i];
    }

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      if (char === " ") {
        result += " ";
      } else if (encode && char in encodingMap) {
        result += encodingMap[char];
      } else if (!encode && char in decodingMap) {
        result += decodingMap[char];
      } else {
        result += input[i];
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
