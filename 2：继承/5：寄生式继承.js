// 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。

function createObj (o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log('hi');
    }
    return clone;
}
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。