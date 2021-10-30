const isCoPrime = require("../functions/1. Intermediate/2. isCoPrime.js");

describe("Are these 2 Numbers Co-Prime?", () => {
    test("Returns false if the 2 numbers are the same", () => {
        expect(isCoPrime(5, 5)).toBe(false);
        expect((isCoPrime(2222, 2222))).toBe(false);
    })

    test("Returns true if the two numbers are co-prime", () => {
        expect(isCoPrime(57, 58)).toBe(true);
        expect(isCoPrime(13, 17)).toBe(true);
        expect(isCoPrime(15, 1111)).toBe(true);
    })

    test("Returns false if the 2 numbers are not co-prime", () => {
        expect(isCoPrime(10000000, 100)).toBe(false);
        expect(isCoPrime(56, 300279)).toBe(false);
        expect(isCoPrime(6923544303, 377)).toBe(false);
    })
})