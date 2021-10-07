const { Shape, Cube, Sphere, Dodecahedron } = require("../functions/shapes.js");

describe("Shapes and the use of inheritance", () => {
    describe("Shape Class", () => {
        test("Shape class has a constructor, but throws an error when it is used", () => {
            expect(() => new Shape()).toThrow("Cannot instantiate abstract class!")
        })

        test("Shape class has a getVolume method, but throws an error if it is not overwritten by subclasses", () => {
            const shape = new Dodecahedron(10, 10);
            expect(() => shape.getVolume()).toThrow("Abstract method must be overwritten by subclass!");
        })

        test("Shape class has a getSurfaceArea method, but throws an error if it is not overwritten by subclass", () => {
            const shape = new Dodecahedron(10, 10);
            expect(() => shape.getSurfaceArea()).toThrow("Abstract method must be overwritten by subclass!");
        })

        test("Shape class has a getDensity method, but throws an error if it is not overwritten by subclass!", () => {
            const shape = new Dodecahedron(10, 10);
            expect(() => shape.getDensity()).toThrow("Abstract method must be overwritten by subclass!");
        })
    })

    describe("Cube Class", () => {
        test("Cube class overwrites the constructor for shape with it's own constructor and sets the length and mass properties appropriately", () => {
            expect(() => new Cube(10, 100)).not.toThrow("Cannot instantiate abstract class!");
            expect(Cube.prototype instanceof Shape).toBe(true);
            const cube = new Cube(10, 100);
            expect(cube.length).toBe(10);
            expect(cube.mass).toBe(100);
        })

        test("Cube class overwrites the getVolume() method and returns the correct volume of a class", () => {

        })
    })
})