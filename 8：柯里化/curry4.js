function currying(fn){
    var allArgs = []; // 用来接收参数

    return function next(){
        var args = Array.from(arguments);

        // 判断是否执行计算
        // console.log(args);
        if(args.length > 0){
            allArgs = allArgs.concat(args); // 收集传入的参数，进行缓存
            return next;
        }else{
            return fn.apply(null, allArgs); // 符合执行条件，执行计算
        }
    } 
}
var add = currying(function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
});
// console.log(add(1)(2, 3)(4)());
console.log(add(1)(2)(3)());               // 6
console.log(add(1, 2, 3)(4)());                // 10
console.log(add(1)(2)(3)(4)(5)());             // 15
console.log(add(2, 6)(1)());                   // 9
// 当执行var add = currying(...)时，add变量已经指向了next方法。
// 此时，allArgs在next方法内部有引用到，所以不能被GC回收。
// 也就是说，allArgs在该赋值语句执行后，一直存在，形成了闭包。
// 依靠这个特性，只要把接收的参数，不断放入allArgs变量进行存储即可。
// 所以，当arguments.length > 0时，就可以将接收的新参数，放到allArgs中。
// 最后返回next函数指针，形成链式调用。