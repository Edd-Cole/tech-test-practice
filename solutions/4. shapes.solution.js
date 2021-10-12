class Shape {
    //Define a constructor, and if the constructor is that of shape, then throw an error
    constructor(length, mass) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class!")
        }
    }

    //Define getVolume() method and make the body of said method throw an error
    getVolume() {
        throw new Error("Abstract method must be overwritten by subclass!")
    }

    //Define getSurfaceArea() method and make the body of said method throw an error
    getSurfaceArea() {
        throw new Error("Abstract method must be overwritten by subclass!")
    }

    //Define getDensity() method and make the body of said method throw an error
    getDensity() {
        throw new Error("Abstract method must be overwritten by subclass!")
    }
}

//Make Cube extend the Shape class, so it becomes a subclass of Shape
class Cube extends Shape {
    //Define a constructor, use the super() function to call the constructor of the super class, Shape.
    //Then set the length and mass property to the passed in values from the constructor
    constructor(length, mass) {
        super();
        this.length = length;
        this.mass = mass;
    }

    //Define, thus overwriting, the method from the classes superclass.
    //Volume for a cube is length * length * length, use toFixed to force 3 decimal places, and
    //+ sign casts the result from a String to a Number
    getVolume() {
        const volume = Math.pow(this.length, 3);
        return +volume.toFixed(3);
    }

    //Define, thus overwriting, the method from the classes superclass.
    //Surface Area for a cube is 6 * length * length, use toFixed to force 3 decimal places, and
    //+ sign casts the result from a String to a Number
    getSurfaceArea() {
        const surfaceArea = 6 * Math.pow(this.length, 2);
        return +surfaceArea.toFixed(3);
    }

    //Define, thus overwriting, the method from the classes superclass.
    //Density for a cube is mass / volume, use toFixed to force 3 decimal places, and
    //+ sign casts the result from a String to a Number
    getDensity() {
        const density = this.mass / this.getVolume();
        return +density.toFixed(3);
    }
}

class Sphere extends Shape {
    //Define a constructor, use the super() function to call the constructor of the super class, Shape.
    //Then set the radius and mass property to the passed in values from the constructor
    constructor(radius, mass) {
        super();
        this.radius = radius;
        this.mass = mass;
    }

    //Define, thus overwriting, the method from the classes superclass.
    //Volume for a sphere is (4 * pi * radius * radius * radius) / 3, use toFixed to force 3 decimal places, and
    //+ sign casts the result from a String to a Number
    getVolume() {
        const volume = (4 * Math.PI * Math.pow(this.radius, 3)) / 3;
        return +volume.toFixed(3);
    }

    //Define, thus overwriting, the method from the classes superclass.
    //Surface Area for a sphere is 4 * pi * radius * radius, use toFixed to force 3 decimal places, and
    //+ sign casts the result from a String to a Number
    getSurfaceArea() {
        const surfaceArea = 4 * Math.PI * Math.pow(this.radius, 2);
        return +surfaceArea.toFixed(3);
    }

    //Define, thus overwriting, the method from the classes superclass.
    //Density for a sphere is mass / volume, use toFixed to force 3 decimal places, and
    //+ sign casts the result from a String to a Number
    getDensity() {
        const density = this.mass / this.getVolume();
        return +density.toFixed(3);
    }
}

class Dodecahedron extends Shape {
    constructor(length, mass) {
        super();
        this.length = length;
        this.mass = mass;
    }
}

module.exports = { Shape, Cube, Sphere, Dodecahedron }