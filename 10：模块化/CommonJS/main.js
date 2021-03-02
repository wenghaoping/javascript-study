// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;
var outCounter = require('./lib').outCounter;

console.log(counter);  // 3
incCounter()
console.log(counter); // 3
console.log(outCounter()); // 3
// counter输出以后，lib.js模块内部的变化就影响不到counter了。
// 这是因为counter是一个原始类型的值，会被缓存。除非写成一个函数，才能得到内部变动后的值。