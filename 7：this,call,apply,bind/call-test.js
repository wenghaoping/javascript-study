Function.prototype.myCall = function(context, ...args) {
    // 1: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
    context.func = this
    // 2: 执行函数
    context.func(...args)
    // 3: 删除 1 中挂到目标对象上的函数，把目标对象”完璧归赵”
    delete context.func
}



var me = {
    name: 'icon'
  }
  
  function showName() {
    console.log(this.name)
  }
  
  showName.myCall(me) // icon




  Function.prototype.myCall = function(context = window, ...args) {
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
  }