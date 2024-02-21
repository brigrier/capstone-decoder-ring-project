// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (input.length === 0) return false;

    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    input = input.toLowerCase();

    let result = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (alphabet.includes(char)) {
        let index = alphabet.indexOf(char);

        if (encode) {
          index = (index + shift) % 26;
        } else {
          index = (index - shift) % 26;
          if (index < 0) {
            index += 26; 
          }
        }

        result += alphabet[index];
      } else {
        
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
