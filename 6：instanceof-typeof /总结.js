// 简单来说，我们使用 typeof 来判断基本数据类型是 ok 的，
// 不过需要注意当用 typeof 来判断 null 类型时的问题，
// 如果想要判断一个对象的具体类型可以考虑用 instanceof，
// 但是 instanceof 也可能判断不准确，比如一个数组，
// 他可以被 instanceof 判断为 Object。
// 所以我们要想比较准确的判断对象实例的类型时，
// 可以采取 Object.prototype.toString.call 方法。

console.log(typeof null)// object
// console.log(null instanceof null)// instanceof' is not an object
// null 直接被判断为不是 object，这也是 JavaScript 的历史遗留bug

console.log([] instanceof Array) // true
console.log([] instanceof Object) // true
// 这是因为Array是object的子类

// 1.typeof用以获取一个变量的类型，
// typeof一般只能返回如下几个结果：number,boolean,string,function,object,undefined。
// 我们可以使用typeof来获取一个变量是否存在，如if(typeof a!="undefined"){}，而不要去使用if(a)
// 因为如果a不存在（未声明）则会出错，对于Array,Null等特殊对象使用typeof一律返回object，这正是typeof的局限性。