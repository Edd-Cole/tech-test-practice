function implementBubbleSort(numbers) {
    //Create a new array that does not share the same memoery reference as the original array
    //Create a counter to track how many times we swap numbers in our sort
    const newNumbers = [...numbers];
    let counter = 0;

    //Loop over our new array if the number to the right is less than the current number, swap the 2 and increment our swap counter
    for (let i = 0; i < newNumbers.length; i++) {
        if (newNumbers[i] > newNumbers[i + 1]) {
            counter++;
            let temp = newNumbers[i];
            newNumbers[i] = newNumbers[i + 1];
            newNumbers[i + 1] = temp;
        }
    }

    //If we have swapped any digits, then we might not be done, so use recursion to repeat our sort
    //Otherwise, no changes have taken place, we must be done!
    if (counter !== 0) return implementBubbleSort(newNumbers);

    //return our final sorted array
    return newNumbers;
}

module.exports = implementBubbleSort;