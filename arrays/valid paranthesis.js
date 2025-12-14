/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mp = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stack = [];
    for (let c of s) {
        if (mp.has(c)) {
            if (stack && stack[stack.length - 1] === mp.get(c))
                stack.pop();
            else
                return false;
        } else
            stack.push(c);
    }
    return !stack.length;
};
