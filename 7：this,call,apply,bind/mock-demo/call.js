Function.prototype.call3 = function (context = window, ...args) {
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

// 如果不允许使用...
Function.prototype.call4 = function (context) {
  // this参数可以传null, 当为null的时候，视为指向 window
  var context = context || window;
  context.fn = this;
  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  var result = eval("context.fn(" + args + ")");
  delete context.fn;
  return result;
};
Function.prototype.myCall2 = function (context) {
  // this参数可以传null, 当为null的时候，视为指向 window
  var context = context || window;
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this;
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1); // 获取第一个参数。
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args);
  // 删除 fn
  delete context.fn;
  return result;
};
Function.prototype.myApply = function (context, args = []) {
  let cxt = context || window;
  //将当前被调用的方法定义在cxt.func上.(为了能以对象调用形式绑定this)
  //新建一个唯一的Symbol变量避免重复
  let func = Symbol();
  cxt[func] = this;
  //以对象调用形式调用func,此时this指向cxt 也就是传入的需要绑定的this指向
  const res = args.length > 0 ? cxt[func](...args) : cxt[func]();
  delete cxt[func];
  return res;
};
var obj = {
  value: 1,
};

function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age,
  };
}
bar.call2(obj, "kevin", 18);
console.log(obj);
// 注意这里没有考虑函数返回值情况，但是想证明是否有效，可以调用obj.fn
