const recoverString = require("../functions/4. Advanced/18. recoverString.js");

describe("Recover the Secret String", () => {
    test("returns a word of 3 letters", () => {
        const triples = [
            ["s", "k", "y"]
        ];
        expect(recoverString(triples)).toBe("sky");
    })

    test("returns a word of 5 letters", () => {
        const triples = [
            ["a", "k", "l"],
            ["k", "l", "e"],
            ["a", "n", "e"],
            ["n", "k", "l"]
        ];
        expect(recoverString(triples)).toBe("ankle");
    })

    test("returns a word of 7 letters", () => {
        const triples = [
            ["i", "b", "e"],
            ["a", "l", "b"],
            ["c", "a", "r"],
            ["l", "i", "r"],
            ["b", "r", "e"]
        ]
        expect(recoverString(triples)).toBe("calibre");
    })

    test("returns a word of 15 letters long", () => {
        triples = [
            ["g", "l", "p"],
            ["d", "t", "g"],
            ["a", "t", "o"],
            ["p", "h", "s"],
            ["o", "g", "l"],
            ["y", "p", "i"],
            ["d", "c", "s"],
            ["y", "i", "c"],
            ["m", "a", "g"],
            ["e", "r", "t"],
            ["r", "m", "y"],
            ["g", "i", "s"],
            ["d", "e", "c"],
            ["l", "y", "s"],
            ["i", "c", "s"],
            ["t", "o", "i"],
            ["a", "g", "y"],
            ["i", "c", "s"],
            ["h", "i", "c"]
        ]
        expect(recoverString(triples)).toBe("dermatoglyphics");
    })
})