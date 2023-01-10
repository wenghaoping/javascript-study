Function.prototype.myApply = function (context, args) {
  // 1: 判断当前传参是否是数组
  if (args && !(args instanceof Array)) {
    throw new TypeError("呀呀呀，参数必须是数组哦");
  }
  // 2: 上面说的 如果是null默认指向window
  context = context || window;
  // 3: 把函数挂到目标对象上（这里的 this 就是我们要改造的的那个函数）
  context.func = this;
  // 4: 执行函数并且存储上面说的 返回值
  const result = context.func(args ? [...args] : "");
  // 5: 删除 1 中挂到目标对象上的函数，把目标对象”完璧归赵”
  delete context.func;
  // 6: 返回结果值
  return result;
};

