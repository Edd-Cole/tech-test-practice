const isHappyPrime = require("../functions/4. Advanced/16. happyPrime.js");

describe("Happy Prime Numbers", () => {
    test("returns false for when the input is 1 (1 is not a prime number!)", () => {
        expect(isHappyPrime(1)).toBe(false);
    })

    test("Returns true when a number is a happy number after 1 iteration", () => {
        expect(isHappyPrime(13)).toBe(true);
        expect(isHappyPrime(31)).toBe(true);
    })

    test("Return true when a number is a happy number after multiple iterations", () => {
        expect(isHappyPrime(313)).toBe(true);
        expect(isHappyPrime(379)).toBe(true);
    })

    test("Returns false if the number is not prime, regardless if it is happy or not", () => {
        expect(isHappyPrime(552)).toBe(false);
        expect(isHappyPrime(68)).toBe(false);
        expect(isHappyPrime(973)).toBe(false);
    })

    test("Returns false if the number is not happy, regardless if it is a prime or not", () => {
        expect(isHappyPrime(999)).toBe(false);
        expect(isHappyPrime(17)).toBe(false);
        expect(isHappyPrime(367)).toBe(true);
        expect(isHappyPrime(941)).toBe(false);
    })

    test("Returns correct deduction for really large numbers!", () => {
        expect(isHappyPrime(93700121)).toBe(false);
        expect(isHappyPrime(937400153)).toBe(true);
        expect(isHappyPrime(937460149)).toBe(false);
        expect(isHappyPrime(1037460323)).toBe(true);
    })
})