module.exports = function reverse (n) {
    let reverseNumber = 0;
    let m = Math.abs(n)
    while(m > 0) {
      const num = m % 10;
      m = Math.trunc(m / 10);
      reverseNumber = reverseNumber*10 + num;
    }
    console.log(reverseNumber);
    return reverseNumber;
}
