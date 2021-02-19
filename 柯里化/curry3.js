function currying(fn) {
    let allArgs = [];
    return function next() {
        let args = Array.from(arguments);
        if (args.length > 0) {
            allArgs = [...allArgs, ...args];
            return next;
        } else {
            return fn.apply(null, allArgs);
        }
    }
}
function consoleMock () {
    return currying(function() {
        return Array.from(arguments);
    })
}
var consoleMock2 = currying(function(){
    return Array.from(arguments);
});

// consoleMock(1,2,3,4,5);     // print: 1,2,3,4,5
console.log(consoleMock2(1)(2)(3,4,5)(6)());   // print: 1,2,3,4,5
console.log(consoleMock2(1,2)(3,4)(5)());   // print: 1,2,3,4,5
// consoleMock(1,2)(3,4)(5);   // print: 1,2,3,4,5
// consoleMock(1)(2)(3)(4)(5); // print: 1,2,3,4,5