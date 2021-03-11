Function.prototype.bindFn = function(thisArg) {
    if (typeof this !== 'function') {
        throw new TypeError('must be a function');
    }
    let self = this;
    let args = [].slice.call(arguments, 1);
    let bound = function() {
        let 
    }
}