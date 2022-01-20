Function.prototype.apply2 = function(context = window, args) {
    context.fn = this;
    let result;
    //判断是否有第二个参数
    result = context.fn(...args);
    delete context.fn;
    return result;
}
Function.prototype.myApply = function (context) {
    var context = context || window
    context.fn = this
  
    var result
    // 需要判断是否存储第二个参数
    // 如果存在，就将第二个参数展开
    if (arguments[1]) {
      result = context.fn(...arguments[1])
    } else {
      result = context.fn()
    }
  
    delete context.fn
    return result
  }