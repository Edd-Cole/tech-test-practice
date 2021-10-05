function sym(...args) {
    //Create a new object and array for future purposes, make them empty
    const obj = {};
    const arr = [];
    //first loop for the first 2 arguments of the function, sorts them into order to help with any duplicates in the same array
    for (let i = 0; i <= 1; i++) {
        args[i].sort((a, b) => a - b);
        //2nd loop goes through each element of the inputted arrays, if 2 adjacent elements of the array are identical, then it will skip over this iteration
        //this helps with ensuring the future collection in an object only takes into account whether a value is coming from an array, not just counting how
        //many times a number appears in the arguments
        for (let j = 0; j <= args[i].length; j++) {
            if (args[i][j] === args[i][j - 1]) continue;
            //If the numbers are not equal, in the object, either increment the key value pair in the object, or create a new key value pair where the which begins
            //to count the number of instances that the number occurs in the arrays
            obj[args[i][j]] ? obj[args[i][j]]++ : obj[args[i][j]] = 1;
        }
    }
    //This loops through the object, and if a number has a value of 1 associated with it, it means it only occurs once in both arrays, thus we push it into our
    //earlier array which will be our answer
    for (let item in obj) {
        if (obj[item] === 1)
            arr.push(+item);
    }
    //If we still have any array left after we have processed the first 2 arrays, we use recursion to repeat the process, but this time, we set the first argument
    //as our array we have created from above, and then slice the args starting at index 2 to then end of the arguments to ensure we don't repeat ourselves.
    //This will loop until there are no more arrays left to do
    if (args.length > 2) {
        return sym(arr, ...args.slice(2))
    }
    //Finally, we return the last array that has been processed, either by recursion, or if there were only 2, we return our initally created array
    return arr;
}

module.exports = sym;