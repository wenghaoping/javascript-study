class A {
  handleClick() {
    console.log(this);
  }
}
class B {
  handleClick = () => {
    console.log(this);
  };
}

var a1 = new A();
var a2 = new A();

var b1 = new B();
var b2 = new B();
console.log(a1.handleClick === a2.handleClick); // true
console.log(b1.handleClick === b2.handleClick); // false

// 第一个因为是原型链上的属性，所以指向同一个。
// 第二个因为是class的属性，新建了，指向的是2个不一致的。
