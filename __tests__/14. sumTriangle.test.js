const sumTriangle = require("../functions/3. Big O Notation/14. sumTriangle.js");

describe("Calculate the Sum of Square and Triangle Numbers", () => {
    test("Returns 0 when input is 0", () => {
        expect(sumTriangle(0)).toBe(0);
    })

    test("Returns correct answer for small values of n", () => {
        expect(sumTriangle(1)).toBe(1);
        expect(sumTriangle(2)).toBe(3);
        expect(sumTriangle(5)).toBe(15);
        expect(sumTriangle(11)).toBe(66);
    })

    test("Returns correct answer for large values of n", () => {
        expect(sumTriangle(1000)).toBe(500500);
        expect(sumTriangle(1500)).toBe(1125750);
    })

    test("Returns correct answer for extreme values of n within a time limit", () => {
        const start = new Date();
        expect(sumTriangle(10000)).toBe(50005000);
        expect(sumTriangle(18327)).toBe(167948628);
        expect(sumTriangle(471337)).toBe(111079519453);
        expect(sumTriangle(97317417)).toBe(4735339874434653);
        expect(new Date() - start).toBeLessThan(50);
    })
})