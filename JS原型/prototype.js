function Dog() {

}
Dog.prototype.name = '小黄';

let dog1 = new Dog();
let dog2 = new Dog();

console.log(dog1.__proto__ === dog2.__proto__);
console.log(dog1.__proto__ === Dog.prototype);
console.log(dog1.__proto__.__proto__ === Object.prototype);
console.log(dog1.__proto__.__proto__.__proto__ === null);
