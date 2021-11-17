const pythag = (n) => {
    //Loop through to find the first number, a or i
    for (let i = 1; i < n; i++) {
        //Loop through to find the second number, b or j
        for (let j = 1; j < i; j++) {
            //Calculate c or k, by using c = sqrt(a^2 + b^2);
            let k = Math.sqrt(i * i + j * j);
            //If k is an integer, we have a pythag triplet!
            if (k % 1 === 0) {
                //Lastly, check that the pythag triplet we've found satisfies the condition a + b + c = n
                if (i + k + j === n) {
                    //Return the product of a * b * c
                    return i * j * k
                }
            }
        }
    }
    //If no solution is found, return 0
    return 0;
}

module.exports = pythag;