function newFn(fn) {
    let obj = {};
    let construct = [].shift.call(arguments);
    obj.__proto__ = construct.prototype;
    let ret = construct.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
}