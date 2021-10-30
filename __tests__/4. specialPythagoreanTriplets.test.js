const pythag = require("../functions/1. Intermediate/4. specialPythagoreanTriplets.js");

describe("Special Pythagorean Triplets", () => {
    test("returns 0 if there are no integers a, b and c that sum to n", () => {
        expect(pythag(6)).toBe(0);
        expect(pythag(100)).toBe(0);
    })

    test("returns a product of abc if there are integers a, b and c that sum to n", () => {
        expect(pythag(24)).toBe(480)
        expect(pythag(30)).toBe(780)
        expect(pythag(1000)).toBe(31875000)
    })
})