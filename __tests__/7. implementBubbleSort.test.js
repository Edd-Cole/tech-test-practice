const implementBubbleSort = require("../functions/1. Intermediate/7. implementBubbleSort.js");
const fs = require("fs/promises");

describe("Creating Bubble Sort", () => {
    test("Returns an already sorted array of numbers", () => {
        expect(implementBubbleSort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(implementBubbleSort([2, 2, 4, 5, 5, 7, 8, 9, 9])).toEqual([2, 2, 4, 5, 5, 7, 8, 9, 9]);
    })

    test("Returns a sorted array lowest to highest", () => {
        expect(implementBubbleSort([3, 1, 5, 8, 9])).toEqual([1, 3, 5, 8, 9]);
        expect(implementBubbleSort([33, 44, 11, 99, 66, 33])).toEqual([11, 33, 33, 44, 66, 99]);
        expect(implementBubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])).toEqual([1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643])
    })

    test("Returns a new array of sorted numbers", () => {
        const original = [4, 1, 5, 7, 3];
        expect(implementBubbleSort(original)).not.toBe(original);
    })

    test("Returns an array that does not mutate the original array we pass in", () => {
        const original = [6, 1, 6, 9, 3, 2];
        implementBubbleSort(original);
        expect(original).not.toEqual([1, 2, 3, 6, 6, 9]);
    })

    test("Custom bubble sort function does not implement sort()", () => {
        return fs.readFile(`${__dirname}/../functions/1. Intermediate/6. implementBubbleSort.js`, "utf8")
            .then((file) => {
                let sortString = /\.sort\(/;
                expect(file.length).toBeGreaterThan(85);
                expect(sortString.test(file)).toBe(false);
            })
    })
})