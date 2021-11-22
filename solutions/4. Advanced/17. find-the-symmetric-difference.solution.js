function sym(...args) {
    // Define a 2 arrays and an object
    const sets = [];
    const values = [];
    const obj = {};

    // Loop through all the arguments and create a Set (a Set is an object that only contains one unique value for each value passed in) 
    // from each argument passed in
    for (let i = 0; i < args.length; i++) {
        sets[sets.length] = new Set(args[i]);
    }

    // Loop through all the sets in the sets array
    for (const set of sets) {
        // Add the value in the set into an object as a key with a boolean of true if not in the set, otherwise set the value to false
        for (const num of set) {
            obj[num] ? obj[num] = false : obj[num] = true;
        }
    }

    // Loop through all the numbers in obj
    for (let num in obj) {
        // If the number in object is true, add it into values, casting it back into a number;
        if (obj[num])
            values[values.length] = +num;
    }

    // Return the values array
    return values;
}

module.exports = sym;