module.exports = function reverse (n) {
    let a = n.toString().split('').reverse().join('');
    a.slice(0, -1);
    return parseInt(a, 10);

}
