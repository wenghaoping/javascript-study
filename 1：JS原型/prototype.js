function Foo() {};

let f1 = new Foo();
let f2 = new Foo();
let o1 = new Object();
let o1 = new Object();

f1.__proto__ === Foo.prototype;
f1.__proto__.__proto__ === Object.prototype ;
f1.__proto__.__proto__.__proto__ === null ;
f1.constructor === Foo.prototype.constructor;
Foo.prototype.constructor === Foo; 
Foo.prototype.__proto__ === Object.prototype; 
Object.prototype.__proto__ === null; 
Object.prototype.constructor === Object; 
Object.__proto__ === Function.prototype; 
Function.prototype.__proto__ === Object.prototype; 
Function.__proto__ === Function.prototype; 
Foo.__proto__ === Function.prototype;
o1.__proto__ === Object.prototype;

f1.__proto__ === f2.__proto__;
