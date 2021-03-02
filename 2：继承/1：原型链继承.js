function Parent () {
    this.name = 'kevin';
}

Parent.prototype.getName = function () {
    console.log(this.name);
}

function Child () {}

Child.prototype = new Parent();

var child1 = new Child();

console.log(child1.getName()) // kevin

//1.引用类型的属性被所有实例共享，举个例子：
// function Parent () {
//     this.names = ['kevin', 'daisy'];
// }

// function Child () {

// }

// Child.prototype = new Parent();

// var child1 = new Child();

// child1.names.push('yayu');

// console.log(child1.names); // ["kevin", "daisy", "yayu"]

// var child2 = new Child();

// console.log(child2.names); // ["kevin", "daisy", "yayu"]
// 2.在创建 Child 的实例时，不能向Parent传参