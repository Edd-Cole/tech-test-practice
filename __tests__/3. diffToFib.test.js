const diffToFib = require("../functions/1. Intermediate/3. diffToFib.js");

describe("Difference to the Next Fibonacci Number", () => {
    test("Returns 0 when the input itself is a Fibonacci Number", () => {
        expect(diffToFib(5)).toBe(0);
        expect(diffToFib(13)).toBe(0);
        expect(diffToFib(1597)).toBe(0);
    })

    test("Returns the difference when the input is not a Fibonacci Number", () => {
        expect(diffToFib(4)).toBe(1);
        expect(diffToFib(1000)).toBe(597);
        expect(diffToFib(50025)).toBe(25000);
    })

    test("Returnst the difference for large inputs", () => {
        expect(diffToFib(1000000)).toBe(346269);
        expect(diffToFib(58362941)).toBe(4883045);
        expect(diffToFib(1000000000)).toBe(134903170);
    })
})