Function.prototype.bind=function(obj,arg){
    var arg = Array.prototype.slice.call(arguments, 1); 
    var context = this;
    var bound = function(newArg){
        arg = arg.concat(Array.prototype.slice.call(newArg)); 
        return context.apply(obj,arg);
    }
    var F = function(){}
    //这里需要一个寄生组合继承
    F.prototype = context.prototype;
    bound.prototype=new F(); 
    return bound; 
}

Function.prototype.myBind = function (context, ...args) {
    // 1: 保存下当前 this（这里的 this 就是我们要改造的的那个函数）
    const _this = this;
    // 2: 返回一个函数
    return function F() {
      // 3: 因为返回了一个函数，除了直接调用还可以 new F()，所以需要判断分开走
      // 4: new 的方式
      if (_this instanceof F) {
        return new _this(...args, ...arguments);
      }
      // 5: 直接调用，这里选择了 apply 的方式实现但是对于参数需要注意以下情况：
      // 因为 bind 可以实现类似这样的代码 f.bind(obj, 1)(2)，
      // 所以我们需要将两边的参数拼接起来，于是就有了这样的实现 args.concat(…arguments)；
      return _this.apply(context, args.concat(...arguments));
    }
}
