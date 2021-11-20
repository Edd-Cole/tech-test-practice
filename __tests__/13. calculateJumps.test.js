const calculateJumps = require("../functions/3. Big O Notation/13. calculateJumps.js");

describe("Frog Jumps", () => {
    test("Returns the correct answer for small values of a, b and d", () => {
        expect(calculateJumps(10, 85, 30)).toBe(3);
        expect(calculateJumps(0, 300, 40)).toBe(8);
    })

    test("Returns correct answer for extreme initial conditions", () => {
        expect(calculateJumps(1000, 1000, 20)).toBe(0);
    })

    test("Returns correect answer for small jumps within 10ms ", () => {
        const start = new Date();
        expect(calculateJumps(0, 100000000, 2)).toBe(50000000);
        expect(new Date() - start).toBeLessThan(10);
    })

    test("Returns correct answer for extreme small jumps in less than 10ms", () => {
        const start = new Date();
        expect(calculateJumps(-2000000000, 2000000000, 1)).toBe(4000000000);
        expect(new Date() - start).toBeLessThan(10);
    })
})