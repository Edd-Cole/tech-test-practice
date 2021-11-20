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
        expect(passingNumber(1000, 1)).toBe(301)
        expect(passingNumber(20000, 17)).toBe(1600);
        expect(passingNumber(93518, 62)).toBe(3765);
        expect(passingNumber(532887, 109)).toBe(2673);
    })

    describe.skip("Time Efficiency Challenge & Memory Challenge! Can you make your's complete the tests in the given time limit & work with large numbers?", () => {

        // THIS TEST CASE BELOW IS TO SEE IF YOU WILL PASS THE LATER TESTS ---
        // IF YOU FAIL THIS ONE AND TRY THE OTHERS, YOU WILL BE WAITING FOR A VERY LONG TIME!!!!!

        test.only("Time Efficiency test - If you fail this test, don't try the ones below!", () => {
            const start = new Date();
            expect(passingNumber(100000, 7)).toBe(50000);
            expect(new Date() - start).toBeLessThan(100);
            expect(passingNumber(250000, 101)).toBe(1800);
            expect(new Date() - start).toBeLessThan(500);
            validSolution = true;
        })

        test("Returns number of occurences for large values of num  - 15 seconds", () => {
            const start = new Date();
            expect(passingNumber(526100, 91)).toBe(20721);
            expect(new Date() - start).toBeLessThan(1500)
            expect(passingNumber(1000000, 208)).toBe(4000);
            expect(new Date() - start).toBeLessThan(5000);
            expect(passingNumber(3739911, 17)).toBe(290199);
            expect(new Date() - start).toBeLessThan(15000);
        })

        test("Is it efficient for your memory too??? - If it isn't the Node will auto exit the jest testing suite without any feedback... .only this test! - 15 seconds ", () => {
            const start = new Date();
            expect(passingNumber(15337113, 3)).toBe(11209350);
            expect(new Date() - start).toBeLessThan(15000);
        })
    })
})