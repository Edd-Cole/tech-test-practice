function passingNumber(number, value) {
    // Define a count variable
    let count = 0;

    // Loop through every number from 0 up to number
    for (let i = 0; i <= number; i++) {
        // Convert i into a string for comparison purposes
        let num = i.toString();
        // Loop through num testing at each index of the string
        for (let j = 0; j < num.length; j++) {
            // Take a section of num with the length of value.length
            numSection = num.slice(j, j + value.toString().length)
                // Test if our section of num loosely matches our comparison value... if so increase count
            if (numSection == value) {
                count++;
            }
        }
    }
    return count;
}

// Solution for passing the Time Efficiency and Memory Efficiency challenges - Part 1!

function passingNumberEfficient(number, value) {
    // Define occurencesOfValue, a numString and the length of value;
    let occurencesOfValue = 0;
    let numString = "";
    const length = value.toString().length

    // Loop up to the value of number concatenating each number into a string, seperated by a comma
    for (let i = 0; i <= number; i++) {
        numString += i + ",";
    }

    // Loop through numString, checking if a section of the string matches our value, if so increase occurencesOfValue
    for (let i = 0; i < numString.length; i++) {
        if (numString.slice(i, i + length) == value)
            occurencesOfValue++;
    }

    return occurencesOfValue;
}

// Solution for Time & Memory challenge - Part 2

function passingNumberSuperEfficient(number, value) {
    // Create a regex using a look ahead to search for the value with the global flag, set occurencesOfValue to 0
    const regex = new RegExp(`(?=${value})`, "g");
    let occurencesOfValue = 0;

    // Loop up to number 
    for (let i = 0; i <= number; i++) {
        // Search the current i for any and all matches with created regex
        const occurences = i.toString().match(regex);
        // occurences exist, get the length, otherwise set to 0
        const countOccurences = occurences ? occurences.length : 0;
        // Add occurences to occurencesOfValue
        occurencesOfValue += countOccurences;
    }

    return occurencesOfValue;
}


module.exports = { passingNumber, passingNumberEfficient, passingNumberSuperEfficient }