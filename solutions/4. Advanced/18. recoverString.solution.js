const recoverString = (triplets) => {
    // Create an empty string and an empty set
    let secretString = "";
    const nextPotentialLetters = new Set();

    // Loop through the first column adding each value to our set... Set auto discards duplicate values
    for (let i = 0; i < triplets.length; i++) {
        nextPotentialLetters.add(triplets[i][0])
    }

    // Loop through 2nd and 3rd columns, if a nPL's value exists in columns 2 or 3, delete it 
    for (let i = 0; i < triplets.length; i++) {
        if (nextPotentialLetters.has(triplets[i][1]))
            nextPotentialLetters.delete(triplets[i][1]);
        else if (nextPotentialLetters.has(triplets[i][2]))
            nextPotentialLetters.delete(triplets[i][2]);
    }

    // The remaining letter is the next letter of our secretString, add that letter into our secretString
    const nextLetter = [...nextPotentialLetters][0]
    secretString += nextLetter;

    // Create a newTriplets array where we remove the nextLetter from the triplets
    const newTriplets = triplets.map(triplet => {
        return triplet.filter(letter => letter !== nextLetter)
    })

    // As long as an array exists with length greater than 1 we can use recursion to extract the next letter and concatenate it onto our current secretString
    if (triplets.some(triplet => triplet.length > 1))
        return secretString + recoverString(newTriplets)

    // Return our secretString for our recursion to build up
    return secretString;
}

module.exports = recoverString;