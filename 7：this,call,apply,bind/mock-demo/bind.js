
Function.prototype.bind = function(context) {
    let _me = this
     return function() {
         return _me.apply(context)
     }
 }

Function.prototype.bind2 = function (context) {
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1); // 获取bind方法传入的参数
    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments); // 获取函数执行传入的参数
        return self.apply(context, args.concat(bindArgs));
    }
}
//一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。


// 第三版
Function.prototype.bind3 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}

// 第四版
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    // 但是在这个写法中，我们直接将 fBound.prototype = this.prototype，
    // 我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。
    // 这个时候，我们可以通过一个空函数来进行中转：
    fBound.prototype = new fNOP();
    return fBound;
}
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
  }

  // 最终版
// 第三版 实现new调用
Function.prototype.bindFn = function bind(thisArg){
  if(typeof this !== 'function'){
      throw new TypeError(this + ' must be a function');
  }
  // 存储调用bind的函数本身
  var self = this;
  // 去除thisArg的其他参数 转成数组
  var args = [].slice.call(arguments, 1);
  var bound = function(){
      // bind返回的函数 的参数转成数组
      var boundArgs = [].slice.call(arguments);
      var finalArgs = args.concat(boundArgs);
      // new 调用时，其实this instanceof bound判断也不是很准确。es6 new.target就是解决这一问题的。
      if(this instanceof bound){
          // 这里是实现上文描述的 new 的第 1, 2, 4 步
          // 1.创建一个全新的对象
          // 2.并且执行[[Prototype]]链接
          // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
          // self可能是ES6的箭头函数，没有prototype，所以就没必要再指向做prototype操作。
          if(self.prototype){
              // ES5 提供的方案 Object.create()
              // bound.prototype = Object.create(self.prototype);
              // 但 既然是模拟ES5的bind，那浏览器也基本没有实现Object.create()
              // 所以采用 MDN ployfill方案 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
              function Empty(){}
              Empty.prototype = self.prototype;
              bound.prototype = new Empty();
          }
          // 这里是实现上文描述的 new 的第 3 步
          // 3.生成的新对象会绑定到函数调用的`this`。
          var result = self.apply(this, finalArgs);
          // 这里是实现上文描述的 new 的第 5 步
          // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，
          // 那么`new`表达式中的函数调用会自动返回这个新的对象。
          var isObject = typeof result === 'object' && result !== null;
          var isFunction = typeof result === 'function';
          if(isObject || isFunction){
              return result;
          }
          return this;
      } else{
          // apply修改this指向，把两个函数的参数合并传给self函数，并执行self函数，返回执行结果
          return self.apply(thisArg, finalArgs);
      }
  };
  return bound;
}


