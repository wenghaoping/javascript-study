function sub_curry(fn){
    return function(){
        return fn()
    }
}

function curry(fn, length){
    length = length || 4;
    return function(){
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        }
        else {
            return fn()
        }
    }
}

var fn0 = function(){
    console.log(1)
}

var fn1 = curry(fn0)

fn1()()()() // 1