const maxLength = function(str) {
    const result = [];
    let maxCount = 0;
    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        result[i] = 0;
        if (s == 1) {
            result[i] = (result[i-1] || 0) + 1;
            if (maxCount < result[i]) {
                maxCount = result[i];
            }
        }
    }
    return maxCount;
}
console.log(maxLength('1011101101111110101'));
