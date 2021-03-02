function fun1 () {};
const fun2 = function () {};
const fun3 = new Function('name','console.log(name)');

const obj1 = {};
const obj2 = new Object();
const obj3 = new fun1();
const obj4 = new new Function();


console.log(typeof Object);//function
// console.log(typeof Function);//function
// console.log(typeof fun1);//function
// console.log(typeof fun2);//function
// console.log(typeof fun3);//function
// console.log(typeof obj1);//object
// console.log(typeof obj2);//object
// console.log(typeof obj3);//object
// console.log(typeof obj4);//object
