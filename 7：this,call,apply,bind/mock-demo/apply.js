Function.prototype.apply2 = function(context = window, args) {
    context.fn = this;
    let result;
    //判断是否有第二个参数
    result = context.fn(...args);
    delete context.fn();
    return result;
}