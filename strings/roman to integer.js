function value(c) {
    if (c === "I")
        return 1;
    if (c === "V")
        return 5;
    if (c === "X")
        return 10;
    if (c === "L")
        return 50;
    if (c === "C")
        return 100;
    if (c === "D")
        return 500;
    if (c === "M")
        return 1000;
    return -1;
}

function romanToDecimal(s) {
    res = 0;
    for (let i = 0; i < s.length; i++) {
        let v1 = value(s[i]);
        if (i + 1 < s.length) {
            let v2 = value(s[i + 1]);
            if (v1 >= v2)
                res = res + v1;
            else{
                res += (v2 - v1);
                i++;
            }
        } else
            res += v1;
    }
    return res;
}
let roman = "V"
console.log(romanToDecimal(roman));
