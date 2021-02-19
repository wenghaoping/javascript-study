function Animal(type) {
    this.type = type;
}
Animal.prototype.say = function() {
    console.log('say');
};

function mockNew() {
    let Constructor = [].shift.call(arguments); // 取出构造函数
    let obj = {}   // new 执行会创建一个新对象
    obj.__proto__ = Constructor.prototype 
    Constructor.apply(obj, arguments)
    return obj
}
let animal = mockNew(Animal, 'dog');
console.log(animal.type); // dog
animal.say(); // say
