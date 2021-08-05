const POSITIVE_MAX = 2147483647;
const NEGATIVE_MAX = - 2147483648;

function getDigit(number, digit) {
    return Math.floor(number/Math.pow(10, digit) % 10);
}
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const positiveNumber = Math.abs(x);
    const sign = x < 0 ? -1 : 1;
    const numberOfDigits = Math.floor(Math.log10(positiveNumber) + 1);
    console.log(numberOfDigits)
    let resultSum = 0;
    for(let i = 0; i < numberOfDigits; i++) {
        const digit = getDigit(positiveNumber, i);
        resultSum += digit * Math.pow(10, numberOfDigits - i - 1);
    }
    if(resultSum > POSITIVE_MAX || resultSum < NEGATIVE_MAX) {
        return 0;
    }
    return resultSum * sign;
};