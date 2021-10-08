const pythag = (n) => {
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            let k = Math.sqrt(i * i + j * j);
            if (k % 1 === 0) {
                if (i + k + j === n) {
                    return i * j * k
                }
            }
        }
    }
    return 0;
}

module.exports = pythag;