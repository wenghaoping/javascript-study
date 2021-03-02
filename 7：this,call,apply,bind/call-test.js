function log(){
    console.log.apply(console, arguments);
};
function log2(){
    console.log.call(console, ...arguments);
};
function log3(){
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log.apply(console, args);
};
log(1); //1
log(1,2); //1 2
log2(1,2); //1 2
log3(1, 2); //1 2

