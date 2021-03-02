Function.prototype.call2 = function(context, ...args){
    context.fn = this;
    context.fn(...args);
    delete context.fn;
}
Function.prototype.call3 = function(context = window, ...args) {
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
};
// 如果不允许使用...
Function.prototype.call4 = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args +')');
    delete context.fn;
    return result;
};
Function.prototype.myCall = function(context) {
    context = context ? Object(context) : window
    context.fn = this
    let args = [...arguments].slice(1) // 获取第一个参数。
    let r = context.fn(args)
    delete context.fn
    return r
}
var obj = {
    value: 1
};
function bar(name, age) {
    return {
        value: this.value,
        name: name,
        age: age
    }
};
bar.call2(obj, 'kevin', 18);
console.log(obj);
// 注意这里没有考虑函数返回值情况，但是想证明是否有效，可以调用obj.fn