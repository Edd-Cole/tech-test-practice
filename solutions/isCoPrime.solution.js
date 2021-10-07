const isCoPrime = (num1, num2) => {
    //If the numbers are the same, they cannot be co-prime by definition
    if (num1 === num2) return false;

    //Create an empty array where we will put num1 divisors, for later
    const num1Divisors = [];

    //This bit is for efficiency sake, it won't change the answer derived from the rest of the code.
    //We just make sure we do the smaller of the 2 numbers!
    //For Example, if we have isCoPrime(10000000000000000000000000000000000000000000000000000001, 2) it would make sense
    //to get the all the divisors of 2 and then test our big number against them instead of the other way round.
    if (num1 > num2) {
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }

    //Loop through and find all the divisors of num1, put these into num1Divisors
    for (let i = 2; i < num1 / 2; i++) {
        if (num1 % i === 0) num1Divisors.push(i)
    }

    //Loop through our divisors of num1 using some to get a boolean back, checking whether any of these divide num2 with no remainder,
    //if even 1 divisor divides num2 fully then we use the bang to reverse the true to false, otherwise we get false and bang will 
    //convert this to true 
    return !num1Divisors.some(divisor => num2 % divisor === 0)
}

module.exports = isCoPrime;