class NumberCalculator {
    constructor(nums1, nums2, nums3) {
        this.nums = [nums1, nums2, nums3];
    }

    generate() {
        let sum = 0;
        for (let i = 0; i < this.nums.length; i += 2) {
            sum += this.nums[i];
            sum += this.nums[i + 1];
        }
        this.nums.push(Math.ceil(sum / this.nums[this.nums.length - 1]));
        return this.nums;
    }

    getMidpoint() {
        const sortedNums = [...nums]
        const midpoint = sortedNums.length % 2 === 0 ? sortedNums.length / 2 : (sortedNums.length - 1) / 2;
        return sortedNums[midpoint];
    }

    getUniqueFactors() {
        const A = [];
        const B = {};
        const C = [];
        for (let i = 0; i < this.nums.length; i++) {
            if ([-1, 0, 1].includes(this.nums[i])) {
                break;
            } else {
                for (let j = 2; j <= this.nums[i] / 2; j++) {
                    if (this.nums[i] % j === 0) {
                        A.push(this.nums[j]);
                    }
                }
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