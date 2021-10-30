const sym = require("../functions/1. find-the-symmetric-difference.js");

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
})