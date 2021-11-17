class NumberCalculator {
    // Use the spread operator to capture and create the needed info for our object
    constructor(...nums) {
        this.nums = [...nums];
    }

    generate() {
        let sum = 0;
        // The for loop should increment by 1 not by 2, and the block of code should reflect this;
        for (let i = 0; i < this.nums.length; i++) {
            sum += this.nums[i];
        }
        this.nums.push(Math.ceil(sum / this.nums[this.nums.length - 1]));
        // Should return the entire object, this. Not this.nums;
        return this;
    }

    getMidpoint() {
        // Needs to reference this.nums
        const sortedNums = [...this.nums];
        // Need to sort the numbers to get the true midpoint
        sortedNums.sort((a, b) => a - b);
        const midpoint = sortedNums.length % 2 === 0 ? sortedNums.length / 2 : (sortedNums.length - 1) / 2;
        return sortedNums[midpoint];
    }

    getUniqueFactors() {
        const A = [];
        const B = {};
        const C = [];
        for (let i = 0; i < this.nums.length; i++) {
            if ([-1, 0, 1].includes(this.nums[i])) {
                // We still want to get the rest of the factors so we continue, not break
                continue;
            } else {
                for (let j = 2; j <= this.nums[i] / 2; j++) {
                    if (this.nums[i] % j === 0) {
                        // We want to push in the factor, not the value this.nums[j] could be
                        A.push(j);
                    }
                }
                // We still want to push the actual number as it is still considered a factor
                A.push(this.nums[i])
            }
        }
        A.forEach(factor => B[factor] ? B[factor]++ : B[factor] = 1);

        for (let factor in B) {
            if (B[factor] === 1) {
                C.push(+factor);
            }
        }

        return C;
    }
}

module.exports = NumberCalculator;