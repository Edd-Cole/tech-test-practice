const { Shape, Cube, Sphere } = require("../functions/shapes.js");

describe("Shapes and the use of inheritance", () => {
    describe("Shape Class", () => {
        test("Shape class has a constructor, but throws an error when it is used", () => {
            expect(() => new Shape()).toThrow("Cannot instantiate abstract class!")
        })
    })
})