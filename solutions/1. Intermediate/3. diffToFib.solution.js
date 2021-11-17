function diffToFib(num) {
    // Initialise the starting numbers for Fibonacci's sequence
    let i = 1,
        j = 0;
    // Loop through i and j as a Fibonacci sequence until i exceeds num
    while (i < num) {
        i += j;
        // Set j to be the old value of i
        j = i - j;
    }
    return i - num;
}