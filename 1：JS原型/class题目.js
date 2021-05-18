class A {
    handleClick() {
        console.log(this);
    }
}
class B {
    handleClick = () => {
        console.log(this);
    }
}
var a1 = new A();
var a2 = new A();

var b1 = new B();
var b2 = new B();
console.log(a1.handleClick === a2.handleClick);
console.log(b1.handleClick === b2.handleClick);