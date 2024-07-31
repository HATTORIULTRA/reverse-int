module.exports = function reverse (n) {
    const positiveNumber = Math.abs(n);
    const numberToArray = [...positiveNumber.toString()];
    const reversedArray = numberToArray.reverse();
    const arrayToNumber = +reversedArray.join('');

    return arrayToNumber;
}
