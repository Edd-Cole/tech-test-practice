const isHappyPrime = require("../functions/happyPrime.js");

describe("Happy Prime Numbers", () => {
    test("returns false for when the input is 1 (1 is not a prime number!)", () => {
        expect(isHappyPrime(1)).toBe(false);
    })
    test("Returns true when a number is a happy number", () => {
        expect(isHappyPrime(13)).toBe(true);
        expect(isHappyPrime(31)).toBe(true);
        expect(isHappyPrime(68)).toBe(true);
    })
})