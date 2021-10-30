const toggleDoors = require("../functions/1. Intermediate/1. toggleDoors.js");

describe("Which Doors are Open?", () => {
    test("When given a number of doors, function returns an array", () => {
        expect(Array.isArray(toggleDoors(10))).toBe(true);
        expect(Array.isArray(toggleDoors(100))).toBe(true);
    })

    test("Returns an array with the index of each door that is open when passed a number of doors", () => {
        expect(toggleDoors(100)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100])
        expect(toggleDoors(1000)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961])
    })
})