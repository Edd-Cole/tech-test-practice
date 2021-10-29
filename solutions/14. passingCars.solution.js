const passingCars = (A) => {
    // Create a sum for to add all passings, an array to store the 0's between any 1's, and local passings to be the be the number of 0's between those 1's
    let sum = 0,
        arr = [],
        localPassings = 0;

    // Loop through, increment our local passings counter for each 0 we get and then add it into the array when we reach a 1
    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            localPassings++;
        } else {
            arr[arr.length] = localPassings;
            localPassings = 0;
        }
    }

    // Begin adding all the cars passings our cars have, the first number of 0's will be passed by all the cars, the second number will be passed by one less number
    // of cars and so on as so forth, check the sum is below 2,000,000,000 return -1
    for (let i = arr.length, j = 0; i > 0; i--, j++) {
        sum += i * arr[j];
        if (sum > 2000000000) return -1;
    }

    // Return the number of passings
    return sum;
}

module.exports = passingCars;