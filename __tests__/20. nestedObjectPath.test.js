const nestedObjectPath = require("../functions/4. Advanced/20. nestedObjectPath.js");

describe("nestedObjectPath", () => {
    test("Returns an empty string if the key does not exist in the object", () => {
        const obj = { a: 1, b: 2, c: 3 };
        expect(nestedObjectPath(obj, "d")).toBe("");
    })

    test("Builds a simple object notation path for sorting when the object is of depth 1", () => {
        const obj = { a: "hello", b: "farewell", c: "NOOOOOOO" }
        expect(nestedObjectPath(obj, "a")).toBe("a");
    })

    test("Builds a simple object notation path for sorting when the object is of greater than depth 1", () => {
        const obj = { a: "hello", b: { c: "deep", d: { e: "deeper", f: "quite deep", g: { h: "deepest" } }, i: "not as deep" }, j: "quite shallow" };
        expect(nestedObjectPath(obj, "f")).toBe("b.d.f");
        expect(nestedObjectPath(obj, "h")).toBe("b.d.g.h");
        expect(nestedObjectPath(obj, "i")).toBe("b.i");
    })

    test("Builds a simple object notation path for when the object has a depth greater than 1 and has mulitple key value pairs with the same name", () => {
        const obj = { a: "hello", b: { c: "deep", d: { e: "deeper", f: "quite deep", d: { h: "deepest" } }, i: "not as deep" }, j: "quite shallow", d: { a: { d: "over here" }, l: "not me!" } };
        expect(nestedObjectPath(obj, "l")).toBe("d.l");
        expect(nestedObjectPath(obj, "d")).toBe("d.a.d")
        expect(nestedObjectPath(obj, "h")).toBe("b.d.d.h")
    })

    test("Builds a simple object notation path for very large nested objects", () => {
        const obj = { a: 1, b: 2, c: { d: { c: 2, f: { g: { h: 4, i: { g: 2 }, k: 1 } }, w: { d: 4, i: { i: 1, e: { e: { l: 1, m: 9 } } }, n: 1 }, p: { q: { r: 4, p: 1, q: { q: 1, t: { x: 5, w: { x: { hereIAm: "Found me" }, u: "Nearly" } } } } }, z: 2 }, y: { y: 1, e: 5 } } }
        expect(nestedObjectPath(obj, "d")).toBe("c.d.w.d");
        expect(nestedObjectPath(obj, "q")).toBe("c.d.p.q.q.q");
        expect(nestedObjectPath(obj, "e")).toBe("c.y.e");
        expect(nestedObjectPath(obj, "g")).toBe("c.d.f.g.i.g");
        expect(nestedObjectPath(obj, "hereIAm")).toBe("c.d.p.q.q.t.w.x.hereIAm")
    })
})