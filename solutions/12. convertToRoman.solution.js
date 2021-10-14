function convertToRomanSol(num) {
    const roman = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
    let romanString = "";
    for(let number of roman) {
      if (num - number[0] >= 0) {
        romanString += number[1];
        return romanString + convertToRomanSol(num - number[0])
      }
    }
    return romanString
  }

  module.exports = convertToRomanSol;