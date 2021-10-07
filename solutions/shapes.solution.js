class Shape {
    constructor(length, mass) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class!")
        }
    }

    getVolume() {
        throw new Error("Abstract method must be overwritten by subclass!")
    }

    getSurfaceArea() {
        throw new Error("Abstract method must be overwritten by subclass!")
    }

    getDensity() {
        throw new Error("Abstract method must be overwritten by subclass!")
    }
}

class Cube extends Shape {
    constructor(length, mass) {
        super();
        this.length = length;
        this.mass = mass;
    }

    getVolume() {
        const volume = Math.pow(this.length, 3);
        return +volume.toFixed(3);
    }

    getSurfaceArea() {
        const surfaceArea = 6 * Math.pow(this.length, 2);
        return +surfaceArea.toFixed(3);
    }

    getDensity() {
        const density = this.mass / this.getVolume();
        return +density.toFixed(3);
    }
}

class Sphere extends Shape {
    constructor(radius, mass) {
        super();
        this.radius = radius;
        this.mass = mass;
    }

    getVolume() {
        const volume = (4 * Math.PI * Math.pow(this.radius, 3)) / 3;
        return +volume.toFixed(3);
    }

    getSurfaceArea() {
        const surfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
        return +surfaceArea.toFixed(3);
    }

    getDensity() {
        const density = this.mass / this.getVolume();
        return +density.toFixed(3);
    }
}

//Do not change below this line, for testing purposes
class Dodecahedron extends Shape {
    constructor(length, mass) {
        super();
        this.length = length;
        this.mass = mass;
    }
}

module.exports = { Shape, Cube, Sphere, Dodecahedron }