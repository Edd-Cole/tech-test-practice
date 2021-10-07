class Shape {
    constructor(length, mass) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class!")
        }
    }
}

class Cube extends Shape {

}

class Sphere extends Shape {

}

//Do not change below this line, for testing purposes
class Dodecahedron extends Shape {

}

module.exports = { Shape, Cube, Sphere, Dodecahedron }