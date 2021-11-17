const convertToRoman = require("../functions/1. Intermediate/6. convertToRoman.js");
const convertToRomanSol = require("../solutions/1. Intermediate/6. convertToRoman.solution.js");

describe("Convert to Roman Numerals", () => {
    test("Returns 'I' when passed 1", () => {
        expect(convertToRoman(1)).toBe("I");
    })

    test("Returns 'V' when passed 5", () => {
        expect(convertToRoman(5)).toBe("V");
    })

    test("Returns 'X' when passed 10", () => {
        expect(convertToRoman(10)).toBe("X");
    })

    test("Returns 'L' when passed 50", () => {
        expect(convertToRoman(50)).toBe("L");
    })

    test("Returns 'C' when passed 100", () => {
        expect(convertToRoman(100)).toBe("C");
    })

    test("Returns 'D' when passed 500", () => {
        expect(convertToRoman(500)).toBe("D");
    })

    test("Returns 'M' when passed 1000", () => {
        expect(convertToRoman(1000)).toBe("M");
    })

    test("Returns correct values when passed subtraction values", () => {
        expect(convertToRoman(900)).toBe("CM")
        expect(convertToRoman(400)).toBe("CD")
        expect(convertToRoman(90)).toBe("XC")
        expect(convertToRoman(40)).toBe("XL")
        expect(convertToRoman(9)).toBe("IX")
        expect(convertToRoman(4)).toBe("IV")
    })

    test("Returns all Roman numbers when passed every number between 1 and 4,999", () => {
        for (let i = 1; i < 5000; i++) {
            expect(convertToRoman(i)).toBe(convertToRomanSol(i));
        }
    })
})