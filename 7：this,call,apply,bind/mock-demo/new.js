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
function create() {
    // 创建一个空的对象
    let obj = new Object()
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型
    obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
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

function newOperator(ctor){
    if(typeof ctor !== 'function'){
      throw 'newOperator function the first param must be a function';
    }
    // ES6 new.target 是指向构造函数
    newOperator.target = ctor;
    // 1.创建一个全新的对象，
    // 2.并且执行[[Prototype]]链接
    // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
    var newObj = Object.create(ctor.prototype);
    // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Aarry.from(arguments);
    // 除去ctor构造函数的其余参数
    var argsArr = [].slice.call(arguments, 1);
    // 3.生成的新对象会绑定到函数调用的`this`。
    // 获取到ctor函数返回结果
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    // 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
    // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
    return newObj;
}
