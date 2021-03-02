function createObj(o) {
    function F(){};
    F.prototype = o;
    return new F();
}
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。

// 缺点：

// 包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样。

var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
// var person2 = createObj(person);

person1.name = 'person1';
// console.log(person2.name); // kevin

person1.friends.push('taylor123');
console.log(person1.friends); // ["daisy", "kelly", "taylor"]
console.log(person1.name); // ["daisy", "kelly", "taylor"]
// 注意：修改person1.name的值，person2.name的值并未发生改变，
// 并不是因为person1和person2有独立的 name 值，而是因为person1.name = 'person1'，
// 给person1添加了 name 值，并非修改了原型上的 name 值。