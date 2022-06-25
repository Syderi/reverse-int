// module.exports = function reverse(n) {
module.exports = function reverse(n) {
    // console.log(n)
    n < 0 ? argum = -1 : argum = 1;
    let n1 = n*argum;
    let n2 = n1 + '';
    // console.log(n1);
    // console.log(n1.split('').reverse().join(''));
    let n3 = n2.split('').reverse().join('');
    let n4= n3 *1 / 1;
    // console.log(n3);
    // console.log(typeof(n4));
    return Math.abs(n4*argum);
}

// console.log(module.exports(-231));