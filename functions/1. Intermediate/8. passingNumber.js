function passingNumber(number, value) {
    const regex = new RegExp(value, "g");
    let occurencesOfValue = 0;

    for (let i = 0; i <= number; i++) {
        const occurences = i.toString().match(regex);
        const countOccurences = occurences ? occurences.length : 0;
        occurencesOfValue += countOccurences;
    }

    return occurencesOfValue;
}

module.exports = passingNumber;