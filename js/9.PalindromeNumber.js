/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    x_str = String(x)
    x_reversed = x_str.split('').reverse().join('')
    return x_str == x_reversed
};