// 一个继承自 Foo.prototype 的新对象被创建。
// 使用指定的参数调用构造函数 Foo，
// 并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，
// 也就是没有指定参数列表，Foo 不带任何参数调用的情况。
// 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。
// 一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤

function create() {
  // 创建一个空的对象
  let obj = new Object();
  // 获得构造函数
  let Con = [].shift.call(arguments);
  // 链接到原型
  obj.__proto__ = Con.prototype;
  // 将构造函数 constructor中的this指向obj,并立即执行构造函数内部的操作
  let result = Con.apply(obj, arguments);
  // 确保 new 出来的是个对象
  return typeof result === "object" ? result : obj;
}
var person = mockNew(Otaku, "Kevin", "18");
