// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，
// 如果还查不到，就去找原型的原型，一直找到最顶层为止。

function Person() {

}

Person.prototype.name = 'Kevin';

var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
