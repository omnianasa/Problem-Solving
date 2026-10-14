/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    let minLength = Math.min(first.length, last.length);
    while (i < minLength && first[i] == last[i]) {
        i += 1;
    }
    return first.substring(0, i);

};