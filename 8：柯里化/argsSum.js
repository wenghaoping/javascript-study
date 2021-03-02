function argsSum(args){ 
    return args.reduce((pre, cur) => pre + cur) 
} 
function add(...args1){ 
    let sum1 = argsSum(args1); 
    let fn = function(...args2){ 
        let sum2 = argsSum(args2) 
        return add(sum1 + sum2); 
    } 
    fn.toString = function(){ 
        return sum1; 
    } 
    return fn; 
}

console.log(add(1, 2, 3)(4)(5)(6).toString())

function add2(...args){ 
    let sum = args.reduce((pre, cur) => pre + cur); 
    return function(...nextArgs){ 
        return nextArgs.length ? add2(sum,...nextArgs) : sum; 
    } 
}
console.log(add2(1, 2, 3)(1)(2)(3)());