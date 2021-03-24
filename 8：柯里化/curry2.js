// 柯里化函数
const curry = function (fn) {
    return function nest(...args) {
        // fn.length表示函数的形参个数
        if (args.length === fn.length) {
            // 当参数接收的数量达到了函数fn的形参个数，即所有参数已经都接收完毕则进行最终的调用
            return fn(...args);
        } else {
            // 参数还未完全接收完毕，递归返回judge，将新的参数传入
            return function (arg) {
                return nest(...args, arg);
            }
        }
    }
}

function addNum(a, b, c) {
    return a + b + c;
}

const addCurry = curry(addNum);

console.log(addCurry(1)(2)(3));// 6


function currying(fn) {
    return function next(...args) {
        if (args.length === fn.length) {
            return fn(...args);
        } else {
            return function(arg) {
                return next(...args, arg);
            }
        }
    }
}