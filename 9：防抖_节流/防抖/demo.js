var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    console.log(this);
    console.log(e);
    container.innerHTML = count++;
};

// container.onmousemove = getUserAction;

// 第二版
// function debounce(func, wait) {
//     var timeout;
//     return function () {
//         clearTimeout(timeout)
//         timeout = setTimeout(func, wait);
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000);

// 第三版
// function debounce(func, wait) {
//     var timeout;
//     return function () {
//         var context = this;
//         clearTimeout(timeout)
//         timeout = setTimeout(function(){
//             func.apply(context)
//         }, wait);
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000);

// 第四版
// function debounce(func, wait) {
//     var timeout;
//     return function () {
//         var context = this;
//         var args = arguments;
//         clearTimeout(timeout)
//         timeout = setTimeout(function(){
//             func.apply(context, args)
//         }, wait);
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000);

// function debounce (func, wait) {
//     let timeout;
//     return function () {
//         let context = this;
//         let args = arguments;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(context, args);
//         }, wait);
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000);

// 立刻执行
// 第四版
// immediate 参数判断是否是立刻执行
// function debounce(func, wait, immediate) {
//     var timeout;
//     return function () {
//         var context = this;
//         var args = arguments;

//         if (timeout) clearTimeout(timeout);
//         if (immediate) {
//             // 如果已经执行过，不再执行
//             var callNow = !timeout;
//             timeout = setTimeout(function(){
//                 timeout = null;
//             }, wait)
//             if (callNow) func.apply(context, args)
//         } else {
//             timeout = setTimeout(function(){
//                 func.apply(context, args)
//             }, wait);
//         }
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000, true);

// 第五版，getUserAction 函数可能是有返回值的
function debounce(func, wait, immediate) {
    var timeout, result;
    return function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) {
                result = func.apply(context, args)
            }
        } else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
        return result;
    }
}