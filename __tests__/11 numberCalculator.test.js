const NumberCalculator = require("../functions/2. Classes/11. numberCalculator.js");

describe("Number Calculator", () => {
    test("Constructor creates the desired object", () => {
        let numbers = new NumberCalculator(1, 2, 3);
        expect(numbers.nums).toEqual([1, 2, 3])
        numbers = new NumberCalculator(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
        expect(numbers.nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    })

    test("Generate() adds a new number into the array and returns it", () => {
        let numbers = new NumberCalculator(1, 2, 3);
        expect(numbers.generate().nums).toEqual([1, 2, 3, 2]);
        numbers = new NumberCalculator(2, 4, 6);
        expect(numbers.generate().nums).toEqual([2, 4, 6, 2]);
        numbers = new NumberCalculator(2, 2, 2);
        expect(numbers.generate().nums).toEqual([2, 2, 2, 3]);
        expect(numbers.generate().nums).toEqual([2, 2, 2, 3, 3]);
    })

    test("GetMidpoint() returns the midpoint of the values", () => {
        let numbers = new NumberCalculator(1, 2, 3);
        expect(numbers.getMidpoint()).toBe(2);
        numbers.generate().generate();
        expect(numbers.getMidpoint()).toBe(2)
        numbers = new NumberCalculator(9, 4, 1);
        numbers.generate().generate().generate().generate();
        expect(numbers.getMidpoint()).toBe(4)
    })

    test("GetUniqueFactors() returns all the unique factors for given object", () => {
        const numbers = new NumberCalculator(1, 2, 3);
        expect(numbers.getUniqueFactors()).toEqual([2, 3]);
        numbers.generate();
        expect(numbers.getUniqueFactors()).toEqual([3]);
        const nums = new NumberCalculator(3, 2, 4);
        expect(nums.getUniqueFactors()).toEqual([3, 4]);
        nums.generate();
        nums.generate();
        expect(nums.getUniqueFactors()).toEqual([]);
    })
})