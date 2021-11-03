const sumTriangle = (n) => {
    return n * (n + 1) / 2;
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumTriangle