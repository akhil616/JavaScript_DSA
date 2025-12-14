var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mp = new Map();
    for (let i = 0; i < s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!mp.has(t[i])) {
            return false;
        }
        mp.set(t[i], mp.get(t[i]) - 1);
    }

    for (let value of mp.values()) {
        if (value !== 0){
            return false;
        }
    }

    return true;

};
