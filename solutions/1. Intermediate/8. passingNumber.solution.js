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

// Solution for passing the Time Efficiency and Memory Efficiency challenges!

function passingNumberEfficient(number, value) {
    // Define a count, a string, the length of value and an array of possible numbers from num
    let count = 0;
    let numString = "";
    const length = value.toString().length
    const nums = [];

    // Loop up to the value of number concatenating each number into a string, seperated by a comma
    for (let i = 0; i <= number; i++) {
        numString += i + ",";
    }

    // Loop through the numString adding
    for (let i = 0; i < numString.length; i++) {
        // Take a section of numString of length
        const numSection = numString.slice(i, i + length);
        // If the section has a comma in it discard it as the values come from 2 different numbers and will give an incorrect result, otherwise
        // the section is from 1 number and can be added into our candidate array, nums, for testing all instances of value.
        // This if statement helps memory efficiency of this function
        if (!numSection.includes(",")) {
            nums[nums.length] = numSection;
        }
    }

    // Loop through each num of our candidate array and increment count by 1 if num is a match
    nums.forEach(num => {
        if (num == value) count++;
    })

    return count;
}

module.exports = { passingNumber, passingNumberEfficient }