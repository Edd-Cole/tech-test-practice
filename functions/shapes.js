class Shape {}

class Cube {}

class Sphere {}

//Do not change below this line, for testing purposes
class Dodecahedron extends Shape {
    constructor(length, mass) {
        super();
        this.length = length;
        this.mass = mass;
    }
}

module.exports = { Shape, Cube, Sphere, Dodecahedron }