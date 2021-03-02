function Foo() {};

let f1 = new Foo();
let f2 = new Foo();
let o1 = new Object();
let o2 = new Object();

console.log(f1.__proto__ === Foo.prototype);
console.log(Foo.prototype.constructor === Foo);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.prototype.constructor === Object);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Foo.__proto__ === Function.prototype);

console.log(o1.__proto__ === Object.prototype);
console.log(f1.constructor === Foo);

