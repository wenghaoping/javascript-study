// 之前我们提到了 instanceof 来判断对象的具体类型，
// 其实 instanceof 主要的作用就是判断一个实例是否属于某种类型
let person = function () {}
let nicole = new person()
nicole instanceof person // true

// instanceof 也可以判断一个实例是否是其父类型或者祖先类型的实例。
let person = function () {}

let programmer = function () {}

programmer.prototype = new person()

let nicole = new programmer()
nicole instanceof person // true
nicole instanceof programmer // true