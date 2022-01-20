var a = {
    name : "Cherry",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        setTimeout(  function() {
            this.func1()
        }.call(a), 100);
    }

};

a.func2()            // Cherry

Function.prototype.mycall = function(context = window, ...args) {
    context.fn = this;
    let result = context.fn(...args);
    delete context.fn;
    return result;
}