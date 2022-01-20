function Foo() {
  var a = 1;
}

let f1 = new Foo();
let f2 = new Foo();
let o1 = new Object();
let o2 = new Object();
// delete f1.a
// console.log(f1.a);
// console.log( f1.__proto__ === Foo.prototype);
// console.log( f1.__proto__.__proto__ === Object.prototype );
// console.log( f1.__proto__.__proto__.__proto__ === null );
// console.log( f1.constructor === Foo.prototype.constructor);
// console.log( Foo.prototype.constructor === Foo);
// console.log( Foo.prototype.__proto__ === Object.prototype);
console.log(Foo.__proto__ === Function.prototype);
// console.log( Object.prototype.constructor === Object);
// console.log( Object.prototype.__proto__ === null);
// console.log( Object.__proto__ === Function.prototype);
// console.log( Function.__proto__ === Function.prototype);
// console.log( String.__proto__ === Function.prototype);
// console.log( Function.prototype.__proto__ === Object.prototype);
// console.log( Foo.__proto__ === Function.prototype);
// console.log( o1.__proto__ === Object.prototype);
// console.log( f1.__proto__ === f2.__proto__);
// console.log(Function.prototype.__proto__.__proto__);

function Person() {
  var a = 1;
}
let person1 = new Person();
let person2 = new Person();
let o1 = new Object();
let o2 = new Object();

// 每个对象的__proto__都是指向它的构造函数的原型对象prototype的
// person1.__proto__ === Person.prototype

// 构造函数是一个函数对象，是通过 Function 构造器产生的
// Person.__proto__ === Function.prototype

// 原型对象本身是一个普通对象，而普通对象的构造函数都是Object
// Person.prototype.__proto__ === Object.prototype

// 刚刚上面说了，所有的构造器都是函数对象，函数对象都是 Function 构造产生的
// Object.__proto__ === Function.prototype

// Object 的原型对象也有__proto__属性指向null，null是原型链的顶端
// Object.prototype.__proto__ === null
