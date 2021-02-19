Array.prototype.slice = function(start, end) {
    // 判断start有效性。
    let _start = isNaN(+start) ? 0 : +start  
    // 为-1的时候，返回最后一个。
    if (start < 0) {
        _start = this.length + start;
    }
    let _end = isNaN(+end) ? 0 : +end
    if (_end < 0) {
        _end = this.length + _end;
    }
    if (end == undefined) {
        _end = this.length
    }
    const _array = []
    for (let i = 0; i < this.length; i++) {
        if (_start <= i && i < _end) {
            _array.push(this[i])
        }
    }
    return _array;
}
let a = [1, 2, 3, 4, 5, 6, 7];
let b = '你好啊一二三四五六七八';
console.log(a.slice(1, 2));
console.log(b.slice(-4));
console.log(b[1]);