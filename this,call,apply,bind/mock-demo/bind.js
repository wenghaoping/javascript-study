
Function.prototype.bind = function(context) {
    let _me = this
     return function() {
         return _me.apply(context)
     }
 }
 
 Function.prototype.bind = function(context) {
    let _me = this
    let bindArgs = [].slice.call(arguments, 1) // 获取bind方法传入的参数
    return function() {
        let fnArgs = [].slice.call(arguments) // 获取函数执行传入的参数
        return _me.apply(context, bindArgs.concat(fnArgs))
    }
}