/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    let mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    for (let c of s) {
        if (mapping[c]) {
            if (stack.length == 0 || stack.pop() != mapping[c]) {
                return false;
            }
        }
        else {
            stack.push(c)
        }
    }
    return stack.length == 0;
};