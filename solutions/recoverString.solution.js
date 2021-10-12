const recoverString = (triplets) => {
    //Define our secret string and our contenders for the next letter in our secret string
    let secretString = "";
    let nextPotentialLetters = [];

    //Identify the letter that only appears in column 0
    //Loop through and collect all the letters that appear in the first column, without repeats
    for (let i = 0; i < triplets.length; i++) {
        if (!nextPotentialLetters.includes(triplets[i][0]))
            nextPotentialLetters.push(triplets[i][0]);
    }
    //Loop through the rest of the subarrays, checking if our potential letters appear at index 1 or 2,
    //if so, set them to undefined, as they cannot be the next letter in our string
    for (let i = 0; i < triplets.length; i++) {
        if (nextPotentialLetters.includes(triplets[i][1]) || nextPotentialLetters.includes(triplets[i][2])) {
            const notNext = nextPotentialLetters.includes(triplets[i][1]) ? nextPotentialLetters.indexOf(triplets[i][1]) : nextPotentialLetters.indexOf(triplets[i][2]);
            nextPotentialLetters[notNext] = undefined;
        }
    }
    //Lastly, remove all undefined's from our contenders array, leaving us with out next letter
    nextPotentialLetters = nextPotentialLetters.filter(letter => letter !== undefined);

    //Concatenate next letter into our secret string
    secretString += (nextPotentialLetters[0]);

    //Create new Triplets array with our letter from above removed from the sub-arrays
    const newTriplets = triplets.map(triplet => {
        return triplet.filter(letter => letter !== nextPotentialLetters[0])
    })

    //Repeat this finding, concatenation and removing process until only the last letter of the sentence is left
    //And add the secret strings to the next letter in the string to find
    if (triplets.some(triplet => triplet.length > 1))
        return secretString + recoverString(newTriplets)

    //return our secret string
    return secretString;
}

module.exports = recoverString;