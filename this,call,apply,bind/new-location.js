// var a = new myFunction("Li","Cherry");

// new myFunction {
//     var obj = {};
//     obj.__proto__ = myFunction.prototype;
//     var result = myFunction.call(obj,"Li","Cherry");
//     return typeof result === 'obj'? result : obj;
// }
// 创建一个空对象 obj;
// 将新创建的空对象的隐式原型指向其构造函数的显示原型。
// 使用 call 改变 this 的指向
// 如果无返回值或者返回一个非对象值，
// 则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
// myFunction.apply(obj, ["li", 'cherry']);


function fruits() {};
fruits.prototype = {
    color: "red",
    say: function(argu) {
        console.log("My color is " + this.color);
        console.log(argu);
    }
}
var apple = new fruits();
apple.say(); //My color is red

var banana = {
    color: "yellow"
}
    
apple.say.call(banana, 'test', 'test2'); //My color is yellow
apple.say.apply(banana, ['test', 'test2']); //My color is yellow
apple.say.bind(banana)({'test': '', 'test2': ''}); //My color is yellow



var numbers = [5, 458 , 120 , -215 ];

var maxInNumbers = Math.max.apply(Math, numbers); //458
var maxInNumbers2 = Math.max.call(Math, 5, 458 , 120 , -215); //458

console.log(maxInNumbers)
console.log(maxInNumbers2)