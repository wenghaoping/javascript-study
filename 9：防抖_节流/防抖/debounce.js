// 防抖的原理就是：
// 你尽管触发事件，但是我一定在事件触发 n 秒后才执行，
// 如果你在一个事件触发的 n 秒内又触发了这个事件，
// 那我就以新的事件的时间为准，n 秒后才执行，
// 总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

// 第一版
function debounce(func, wait) {
    var timeout;
    return function () {
        clearTimeout(timeout)
        timeout = setTimeout(func, wait);
    }
}

container.onmousemove = debounce(getUserAction, 1000);
// 如果我们在 getUserAction 函数中 console.log(this)，在不使用 debounce 函数的时候，this 的值为：


// 第二版
function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context)
        }, wait);
    }
}


// 第三版
function debounce(func, wait) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}

// 第四版
function debounce(func, wait, immediate) {
    var timeout;
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
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}