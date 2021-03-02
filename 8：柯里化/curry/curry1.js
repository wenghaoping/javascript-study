// 第一版
var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};

function add(a, b) {
    console.log(a + b)
    // return a + b;
}

var addCurry = curry(add, 1, 2);
addCurry() // 3
//或者
var addCurry = curry(add, 1);
addCurry(2) // 3
//或者
var addCurry = curry(add);
addCurry(1, 2) // 3
// 已经有柯里化的感觉了，但是还没有达到要求，
// 不过我们可以把这个函数用作辅助函数，帮助我们写真正的 curry 函数。