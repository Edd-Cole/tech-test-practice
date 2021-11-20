const isHappyPrime = (num) => {
    //Create an empty array for any repeats of numbers we will go over when we check if the number is happy or not
    const repeatedNums = [];

    //If number is one, return false
    if (num === 1) return false;

    //Check if number is prime, use a for loop to check all the divisors between 2 and number/2, if our number gives us a remainder of 0 when divided
    //by one of our looping numbers, i, then it is not a prime number
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return false;
    }

    //Create a new function to test for happy numbers, we do this so we don't check if each number we create is prime, because this could give us a
    //wrong answer when iterating many times
    function isHappy(number) {
        //We check if our number is in our repeatedNums array, if it is stop, otherwise we will go in an infinite loop!
        if (repeatedNums.includes(number)) return false;

        //Add this number into our repeats, so we can stop if we hit it in the future
        repeatedNums.push(number);

        //Create an array, nums, from our number by converting it into a string which allows us to use the split() method
        const nums = number.toString().split("");

        //We then create a new number, newNum, we use reduce on our nums array so we can square each number in our array and then add it to some total
        //which is what we then set to newNum once we have iterated through the array
        const newNum = nums.reduce((total, number) => total + (number * number), 0)

        //If our newNum is 1, we return true!
        if (newNum === 1) return true

        //Otherwise, using recursion, we iterate over isHappy with our newNum, and will continue to do so until we hit 1, or a repeated number
        //in our repeatedNums array
        else return isHappy(newNum);
    }

    //Lastly, we invoke isHappy with our original num and let recursion do its job!
    return isHappy(num);
}

module.exports = isHappyPrime;