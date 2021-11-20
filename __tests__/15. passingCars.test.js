const passingCars = require("../functions/3. Big O Notation/15. passingCars.js");
const passingCarsSolution = require("../solutions/3. Big O Notation/15. passingCars.solution.js");

describe("Passing Cars", () => {
    test("Returns 0 when cars are all going in the same direction", () => {
        const arr1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        expect(passingCars(arr1)).toBe(0);
        expect(passingCars(arr2)).toBe(0);
    })

    test("Returns answer for arrays less than or equal to 100 in size", () => {
        const arr1 = [0, 1, 0, 1, 1];
        const arr2 = [0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1];
        expect(passingCars(arr1)).toBe(5);
        expect(passingCars(arr2)).toBe(23);

        const arr3 = [];
        for (let i = 0; i < 100; i++) {
            let x = Math.floor(Math.random * 2);
            arr3[arr3.length] = x;
        }
        expect(passingCars(arr3)).toBe(passingCarsSolution(arr3));
    })

    test("Returns answer for medium sized arrays, <= 10,000, time limit = 200ms", () => {
        const arr1 = [];
        const arr2 = [];
        for (let i = 0; i < 10000; i++) {
            let x = Math.floor(Math.random * 2);
            let y = Math.floor(Math.random * 2);
            arr1[arr1.length] = x;
            arr2[arr2.length] = y;
        }

        const start = new Date();
        expect(passingCars(arr1)).toBe(passingCarsSolution(arr1));
        expect(passingCars(arr2)).toBe(passingCarsSolution(arr2));
        // code must execute in 200 milliseconds
        expect(new Date() - start).toBeLessThanOrEqual(200);
    })

    test("Returns answer for large arrays of 100,000 in length, time limit = 800ms", async() => {
        const arr1 = [];
        const arr2 = [];
        for (let i = 0; i < 100000; i++) {
            let x = Math.floor(Math.random * 2);
            let y = Math.floor(Math.random * 2);
            arr1[arr1.length] = x;
            arr2[arr2.length] = y;
        }
        const start = new Date();
        expect(passingCars(arr1)).toBe(passingCarsSolution(arr1));
        expect(passingCars(arr2)).toBe(passingCarsSolution(arr2));
        // Code must execute in 800 milliseconds
        expect(new Date() - start).toBeLessThanOrEqual(800);
    })

    test("Returns answer for large array of 1,000,000, time limit = 5 seconds", () => {
        const arr1 = [];
        const arr2 = [];
        for (let i = 0; i < 1000000; i++) {
            let x = Math.floor(Math.random * 2);
            let y = Math.floor(Math.random * 2);
            arr1[arr1.length] = x;
            arr2[arr2.length] = y;
        }
        const start = new Date();
        expect(passingCars(arr1)).toBe(passingCarsSolution(arr1));
        expect(new Date() - start).toBeLessThanOrEqual(2500);
        expect(passingCars(arr2)).toBe(passingCarsSolution(arr2));
        // Code must execute in 5 seconds
        expect(new Date() - start).toBeLessThanOrEqual(5000);
    })
})