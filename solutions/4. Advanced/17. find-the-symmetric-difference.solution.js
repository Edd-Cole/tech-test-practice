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
        // Loop through all the numbers in the set
        for (const num of set) {
            // If number exists as a key in obj, set value to false, otherwise set key-value pair to {... , num: true}
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