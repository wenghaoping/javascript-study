// 构造函数。
function Person() {}
console.log(Person === Person.prototype.constructor); 
//constructor
// 指向实例倒是没有，因为一个构造函数可以生成多个实例，
// 但是原型指向构造函数倒是有的，
// 这就要讲到第三个属性：constructor，每个原型都有一个 constructor 属性指向关联的构造函数。
var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
// 方法返回指定对象的原型 ( 即, 内部[[Prototype]]属性）。
console.log(Object.getPrototypeOf(person) === Person.prototype) // true



