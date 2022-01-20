// 为了方便大家阅读，在这里重复一下组合继承的代码：

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();

var child1 = new Child("kevin", "18");

console.log(child1);
// 组合继承最大的缺点是会调用两次父构造函数。

// 一次是设置子类型实例的原型的时候：

Child.prototype = new Parent();
// 一次在创建子类型实例的时候：

var child1 = new Child("kevin", "18");
// 回想下 new 的模拟实现，其实在这句中，我们会执行：

Parent.call(this, name);
// 在这里，我们又会调用了一次 Parent 构造函数。

// 所以，在这个例子中，如果我们打印 child1 对象，我们会发现 Child.prototype 和 child1 都有一个属性为colors，属性值为['red', 'blue', 'green']。

// 那么我们该如何精益求精，避免这一次重复调用呢？

// 如果我们不使用 Child.prototype = new Parent() ，而是间接的让 Child.prototype 访问到 Parent.prototype 呢？

// 看看如何实现：

function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 关键的三步
var F = function () {};

F.prototype = Parent.prototype;

Child.prototype = new F();

var child1 = new Child("kevin", "18");

console.log(child1);
// 最后我们封装一下这个继承方法：==========================================================================================

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function prototype(child, parent) {
  var prototype = object(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

// 当我们使用的时候：
// prototype(Child, Parent);
// 引用《JavaScript高级程序设计》中对寄生组合式继承的夸赞就是：

// 这种方式的高效率体现它只调用了一次 Parent 构造函数，
// 并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
// 与此同时，原型链还能保持不变；因此，
// 还能够正常使用 instanceof 和 isPrototypeOf。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
