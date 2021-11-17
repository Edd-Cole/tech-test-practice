function convertToRomanSol(num) {
    //Create an array of arrays with first position the value of the Roman Numeral, and the second the associated Roman Numeral
    //An array is used we need to keep the below order for our for loop to work as needed, an object will sort the keys in a wrong order
    const roman = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]
    //Define an empty string for our new Roman Number
    let romanString = "";
    //Loop through our array
    for(let number of roman) {
        //If the received number becomes less than 0 after subtracting our Roman Numeral value, carry on until we hit a number that doesn't
        if (num - number[0] >= 0) {
            //Add our Roman Numeral to the defined string above
            romanString += number[1];
            //Use recursion with our new reduced number, which concatenates onto our romanString
            return romanString + convertToRomanSol(num - number[0])
        }
    }
    //Lastly, when we hit 0, return our Roman Numeral
    return romanString
  }

  module.exports = convertToRomanSol;