// 获取数字数组中重复的数字

// [1,2,2,3,4,5,4] => [2,4]

function getRepeat(arr) {
    let data = {};
    let result = []
    arr.forEach(item => {
        data[item] ? (result.push(item)) : (data[item] = 1);
    });
    return result;
}
function getRepeat2(arr) {
    let result = new Set();
    arr.reduce((prev, next) => {
        if(prev[next]) {
            result.add(next)
        } else {
            prev[next] = 1;
        }
        return prev;
    }, {})
    return [...result];
}
console.log(getRepeat2([1,2,2,3,4,5,4]));