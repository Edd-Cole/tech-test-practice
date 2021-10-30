function calculateJumps(a, b, d) {
    // Subtract the two distances from each other, then divide by the length of the frogs jump, then raise it to the nearest integer for total jumps
    return Math.ceil((b - a) / d);
}

module.exports = calculateJumps;