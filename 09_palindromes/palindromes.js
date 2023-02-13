const palindromes = function (text) {
  let processedText = text.toLowerCase().replaceAll(/[^a-z]/g, "").split("").reverse().join("");
  return processedText === text.toLowerCase().replaceAll(/[^a-z]/g, "");
};

// Do not edit below this line
module.exports = palindromes;
