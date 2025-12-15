/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const arr = new Array(26).fill(false);
    for (let i = 0; i < sentence.length; i++) {
        let c = sentence[i];
        if (c >= 'A' && c <= 'Z') 
            arr[c.charCodeAt(0) - 'A'.charCodeAt(0)] = true;
        else if(c >= 'a' && c <= 'z')
            arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            return false;
        }
    }
    return true;
};
