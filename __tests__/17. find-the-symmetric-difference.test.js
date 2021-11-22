const sym = require("../functions/4. Advanced/17. find-the-symmetric-difference.js");

describe("Find the Symmetric Difference", () => {
    test("When passed 2 arrays with no intersecting value, will return an array containing all the values from both arrays", () => {
        const array1 = [1, 2, 3, 4, 5];
        const array2 = [6, 7, 8, 9];
        expect(sym(array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test("When passed 2 arrays that are identical, the return value of sym is and empty array []", () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];
        expect(sym(array1, array2)).toEqual([]);
    })

    test("When passed 2 arrays that have some intersecting values, sym will return only the values that occur in one array, regardless of if they appear multiple times in the same array", () => {
        const array1 = [1, 1, 2, 3, 4, 5];
        const array2 = [2, 4, 6, 7, 7];
        expect(sym(array1, array2)).toEqual([1, 3, 5, 6, 7]);
    })

    test("When passed in more than 2 arrays, sym will return the difference of the arrays in a left to right fashion", () => {
        const array1 = [1, 2, 3];
        const array2 = [2, 3, 4, 5];
        const array3 = [1, 3, 5, 7];

        expect(sym(array1, array2)).toEqual([1, 4, 5]); //these first 2 expect statements show the order from left to right 
        expect(sym([1, 4, 5], array3)).toEqual([3, 4, 7]); //take the answer from above and then apply the function with the solution and array3
        expect(sym(array1, array2, array3)).toEqual([3, 4, 7]); //this is how the function should work, notice how the above solution and this solution are identical
    })

    test("When passed in a large number of arrays, sym will return the computation of symmetrical difference in a left to right order", () => {
        const array1 = [1, 2, 3, 4, 5, 6, 7];
        const array2 = [3, 5, 1, 6, 8, 3, 4];
        const array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const array4 = [1, 4, 2, 8, 8, 5, 9, 2];
        const array5 = [4, 6, 5, 7];

        expect(sym(array1, array2, array3, array4, array5, array4, array1, array3, array5, array1, array2)).toEqual([1, 2, 3, 4, 5, 6, 7])
    })

    test("Returns symmetric difference for a larger list of arrays", () => {
        const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 5, 6, 4, 2, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 91, 93, 95, 98, 1];
        const a2 = [2, 3, 1, 4, 33, 22, 11, 44, 55, 54, 3, 22, 1, 21, 41, 31, 54, 76, 87, 65, 54, 4332, 23, 34, 3564, 5443, 43, 41, 44, 91, 96, 93, 94, 222, 444];
        const a3 = [1, 3, 5, 7, 9, 10, 12, 13, 111, 15, 18, 21, 27, 28, 31, 36, 33, 39, 39, 40, 0, 21, 65, 53, 42, 58, 91, 94, 97, 101, 222, 555, 444, 444, 11, 22, 33];
        const a4 = [99, 98, 97, 96, 95, 94, 93, 92, 91, 65, 67, 68, 43, 51, 87, 11, 10, 55, 1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 91, 95, 111, 222, 333, 444, 555, 666];
        const a5 = [15, 25, 35, 45, 55, 66, 77, 88, 99, 98, 97, 96, 95, 94, 92, 41, 52, 62, 72, 83, 75, 74, 101, 102, 103, 104, 105, 106, 111, 222, 333, 444, 555];

        expect(sym(a1, a2, a3, a4, a5, a4, a3, a2, a1, a2, a3, a4, a1, a3, a5, a2, a4, a3, a3, a1, a3, a2, a5, a5, a5, a3, a1, a2, a3, a4, a5, a3, a3, a2, a2, a1, a5, a1, a5, a2, a4, a2, a4, a3, a1, a3))
            .toEqual([0, 2, 4, 6, 8, 12, 13, 15, 18, 21, 22, 27, 28, 31, 33, 36, 39, 40, 42, 43, 51, 53, 55, 58, 67, 68, 87, 92, 93, 95, 96, 98, 99, 101, 333, 666])
    })
})