module.exports = function reverse (n) {
    if(n < 0) return -1 * reverse(-n) * -1;
    const solution = Number((n + "").split('').reverse().join(''));
    return (solution > 2 ** 31 -1) ? 0 : solution;
}
