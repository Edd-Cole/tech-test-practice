function diffToFib(num) {
    // Initialise the starting numbers for the Fibonacci sequence
    let i = 1, j = 0;
    // Loop through i and j as a Fibonacci sequence until i exceeds num;
    while (i < num) {
        // i = i + j
        i += j;
        // the new value of j is the new i minus the old j, setting j as the old i
        j = i - j;
    }
    // Return the first Fibonacci number above num, i, - num to retrieve the difference
    return i - num;
}

module.exports = diffToFib;