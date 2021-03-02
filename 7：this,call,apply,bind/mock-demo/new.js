// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function mockNew() {
    let Constructor = [].shift.call(arguments); // 取出构造函数，第一个参数是构造函数
    let obj = {}   // new 执行会创建一个新对象
    obj.__proto__ = Constructor.prototype 
    let ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}
var person = mockNew(Otaku, 'Kevin', '18')

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60
// person.sayYourName(); // I am Kevin

function Otaku2 (name, age) {
    this.strength = 60;
    this.age = age;

    return 'handsome boy';
}
var person3 = new Otaku2('Kevin', '18');
console.log(person3);
// var person2 = mockNew(Otaku2, 'Kevin', '18');
// console.log(person2.name) // undefined
// console.log(person2.habit) // undefined
// console.log(person2.strength) // 60
// console.log(person2.age) // 18
