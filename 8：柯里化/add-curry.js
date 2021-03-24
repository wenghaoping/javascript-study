function currying(fn){
    var allArgs = [];

    return function next(){
        var args = Array.prototype.slice.call(arguments);
        if(args.length > 0){
            allArgs = allArgs.concat(args);
            return next;
        }else{
            return fn.apply(null, allArgs);
        }
    } 
}
var add = currying(function(){
    let args = Array.from(arguments);
    var sum = 0;
    for(var i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
});

console.log(add(1)(2)(3,4,5)());    // print: 1,2,3,4,5
// add(1)(2)(3,4,5); // print: 1,2,3,4,5
// console.log(add(1,2)(3,4)(5));   // print: 1,2,3,4,5
// console.log(add(1)(2)(3)(4)(5)); // print: 1,2,3,4,5