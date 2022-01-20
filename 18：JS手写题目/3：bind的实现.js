// 3.bind的实现
// 需要考虑：

// bind() 除了 this 外，还可传入多个参数；
// bind 创建的新函数可能传入多个参数；
// 新函数可能被当做构造函数调用；
// 函数可能有返回值；
// 实现方法：

// bind 方法不会立即执行，需要返回一个待执行的函数；（闭包）
// 实现作用域绑定（apply）
// 参数传递（apply 的数组传参）
// 当作为构造函数的时候，进行原型继承

Function.prototype.myBind = function (context, ...args) {
    //新建一个变量赋值为this，表示当前函数
    const fn = this
    //判断有没有传参进来，若为空则赋值[]
    args = args ? args : []
    //返回一个newFn函数，在里面调用fn
    return function newFn(...newFnArgs) {
        if (this instanceof newFn) {
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(context, [...args,...newFnArgs])
    }
}

// let name = '小王',age =17;
// let obj = {
//     name:'小张',
//     age: this.age,
//     myFun: function(from,to){
//         console.log(this.name + ' 年龄 ' + this.age+'来自 '+from+'去往'+ to)
//     }
// }
// let db = {
//     name: '德玛',
//     age: 99
// }

// //结果
// obj.myFun.myCall(db,'成都','上海');     // 德玛 年龄 99  来自 成都去往上海
// obj.myFun.myApply(db,['成都','上海']);      // 德玛 年龄 99  来自 成都去往上海
// obj.myFun.myBind(db,'成都','上海')();       // 德玛 年龄 99  来自 成都去往上海
// obj.myFun.myBind(db,['成都','上海'])();   // 德玛 年龄 99  来自 成都, 上海去往 undefined