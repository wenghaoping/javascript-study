const tuofen = function(obj) {
    const transfer = function(str) {
        if (!str) {
            return '';
        }
        if (typeof str !== 'string') {
            return str;
        }
        const strList = str.split('_');
        return strList.reduce((pre, next) => {
            next = next.replace(next[0], next[0].toUpperCase());
            return `${pre}${next}`
        })
    }
    if (typeof obj === 'string') {
        return transfer(obj);
    }
    const _tuofen = function(o) {
        const result = Array.isArray(o) ? [] : {};
        for (const key in o) {
            const value = o[key];
            console.log(value);
            if (Array.isArray(o)) {
                if (typeof value == 'object') {
                    result.push(_tuofen(value));
                } else {
                    result.push(transfer(value));
                }
            } else {
                if (typeof value === 'object') {
                    result[transfer(key)] = _tuofen(value);
                } else {
                    result[transfer(key)] = value;
                }
            }
        }
        return result;
    }
    return _tuofen(obj);
}
const testData = {
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: 3
    },
    a_f: [1, 2, 3, {
        a_g: 5
    }, 'a_b_c'],
    a_d_s: 1
}
const tuofen2 = function(obj) {
    function transfer(source) {
        if (source && `${source}`.includes('_')) {
            return source.replace(/_([a-zA-Z])/g, function (g) {
                return g[1].toUpperCase();
            });
        }
        return source;
    }
    function isObject(obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
    function _tuofen(o) {
        let result = Array.isArray(o) ? [] : {};
        for (let key in o) {
            const value = o[key];

            if (Array.isArray(o)) {
                if (isObject(value) || Array.isArray(value)) {
                    result.push(_tuofen(value))
                } else {
                    result.push(transfer(value))
                }
            } else {
                if (isObject(value) || Array.isArray(value)) {
                    result[transfer(key)] = _tuofen(value);
                } else {
                    result[transfer(key)] = value;
                }
            }
        }
        return result;
    }
    if (typeof obj === 'string') {
        return transfer(obj);
    }
    return _tuofen(obj);
}

console.log(tuofen2({
    a_bbb: 123,
    a_g: [1, 2, 3, 4],
    a_d: {
        s: 2,
        s_d: 3
    },
    a_f: [1, 2, 3, {
        a_g: 5
    }, 'a_b_c'],
    a_d_s: 1
}));
console.log(tuofen2(['a_b_c', 'bb_cc_dd', 'c']));
console.log(tuofen2('aa_bb_cc_dd_ee_ff'));
console.log(tuofen2(['aa_bb_cc', ['aaa_bbb_ccc', ['xxx_yyy_zzz']]]))
console.log(tuofen2({
    aa_aa_aa: 'a',
    bb_bb_bb: 'b'
}));
console.log(tuofen2({
    aa_aa_aa: {
        cc_cc_cc: {
            dd_dd_dd: 'b'
        }
    },
    bb_bb_bb: 'b'
}));