const passingNumber = require("../functions/1. Intermediate/8. passingNumber.js");

describe("Passing Number", () => {
    test("Returns 0 when input num less than the value to find", () => {
        expect(passingNumber(0, 1)).toBe(0);
        expect(passingNumber(0, 1000)).toBe(0);
        expect(passingNumber(0, 12)).toBe(0);

        expect(passingNumber(1, 2)).toBe(0);
        expect(passingNumber(3, 12)).toBe(0);
        expect(passingNumber(1000, 1500)).toBe(0);
    })

    test("Returns 1 when num === value", () => {
        expect(passingNumber(0, 0)).toBe(1);
        expect(passingNumber(10, 10)).toBe(1);
        expect(passingNumber(5, 5)).toBe(1);
        expect(passingNumber(10000, 10000)).toBe(1);
    })

    test("Returns number of occurences up to number when num > value", () => {
        expect(passingNumber(9, 1)).toBe(1);
        expect(passingNumber(17, 8)).toBe(1);
        expect(passingNumber(70, 10)).toBe(1);
    })

    test("Returns number of occurences of value when num is much higher than value (num >> value)", () => {
        expect(passingNumber(100, 1)).toBe(21);
        expect(passingNumber(100, 9)).toBe(20);
        expect(passingNumber(1000, 10)).toBe(21);
        expect(passingNumber(909, 9)).toBe(191);
    })

    test("Returns number of occurences of value for large nums", () => {
        expect(passingNumber(1000, 1)).toBe(301);
        expect(passingNumber(20000, 17)).toBe(1600);
        expect(passingNumber(93518, 62)).toBe(3765);
        expect(passingNumber(532887, 109)).toBe(2673);
    })

    test("Returns number of occurences of value when value is 'repeatable'", () => {
        expect(passingNumber(3011, 111)).toBe(13);
        expect(passingNumber(106732, 101)).toBe(1317);
        expect(passingNumber(213796, 737)).toBe(624);
        expect(passingNumber(644891, 11)).toBe(36399);
    })

    describe("Time Efficiency Challenge - Part 1", () => {

        // THIS TEST CASE BELOW IS TO SEE IF YOU WILL PASS THE LATER TESTS ---
        // IF YOU FAIL THIS ONE AND TRY THE OTHERS, YOU WILL BE WAITING A VERY LONG TIME!!!!!

        test.only("Can solve large numbers within a 6 second time limit", () => {
            const start = new Date();
            expect(passingNumber(100000, 7)).toBe(50000);
            expect(new Date() - start).toBeLessThan(100);
            expect(passingNumber(250000, 87)).toBe(9500);
            expect(new Date() - start).toBeLessThan(500);
            expect(passingNumber(1567133, 0)).toBe(876124);
            expect(new Date() - start).toBeLessThan(6000);
        })

        describe("Time & Memory Efficiency Challenge - Part 2!", () => {

            test.only("Can solve ultra large numbers within a 6 second time limit", () => {
                const start = new Date();
                expect(passingNumber(601711, 131)).toBe(2812)
                expect(new Date() - start).toBeLessThan(100);
                expect(passingNumber(2223451, 5)).toBe(1308987);
                expect(new Date() - start).toBeLessThan(500);
                expect(passingNumber(15713999, 8)).toBe(10355200);
                expect(new Date() - start).toBeLessThan(6000);
            })
        })
    })
})