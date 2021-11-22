function sym(...args) {
    // Define a 2 arrays and an object
    const sets = [];

    // Loop through all the arguments and create a Set (a Set is an object that only contains one unique value for each value passed in) 
    // from each argument passed in
    for (let i = 0; i < args.length; i++) {
        sets[sets.length] = new Set(args[i]);
    }

    // Pop out the first set from the sets array
    const valueSet = sets.shift();

    // Loop through the rest of the sets in sets array
    for (const set of sets) {
        // Loop through each number in each set
        for (const num of set) {
            // If our first set contains num, delete it from the first set, otherwise add it into our first set
            if (valueSet.has(num)) {
                valueSet.delete(num);
            } else {
                valueSet.add(num);
            }
        }
    }

    // Return our sets as a true array via destructuring and sort the result in ascending order
    return [...valueSet].sort((a, b) => a - b);
}

module.exports = sym;