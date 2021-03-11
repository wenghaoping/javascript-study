function Promise(fn){ 
    let state = 'pending';
    let value = null;
    const callbacks = [];

    this.then = function (onFulfilled){
        console.log('onFulfilled', onFulfilled)
        return new Promise((resolve, reject)=>{
            handle({ //桥梁，将新 Promise 的 resolve 方法，放到前一个 promise 的回调对象中
                onFulfilled, 
                resolve
            })
        })
    }

    function handle(callback){
        console.log('callback', callback)
        if(state === 'pending'){
            callbacks.push(callback)
            return;
        }
        
        if(state === 'fulfilled'){
            if(!callback.onFulfilled){
                callback.resolve(value)
                return;
            }
            const ret = callback.onFulfilled(value) //处理回调
            callback.resolve(ret) //处理下一个 promise 的resolve
        }
    }
    function resolve(newValue){
        console.log('newValue', newValue)
        const fn = ()=>{
            if(state !== 'pending')return

            if(newValue && (typeof newValue === 'object' || typeof newValue === 'function')){
                const {then} = newValue
                if(typeof then === 'function'){
                    // newValue 为新产生的 Promise,此时resolve为上个 promise 的resolve
                    //相当于调用了新产生 Promise 的then方法，注入了上个 promise 的resolve 为其回调
                    then.call(newValue, resolve)
                    return
                }
            }
            state = 'fulfilled';
            value = newValue
            handelCb()
        }
        
        setTimeout(fn,0)
    }
    
    function handelCb(){
        console.log('callbacks2', callbacks)
        while(callbacks.length) {
            const fulfiledFn = callbacks.shift();
            handle(fulfiledFn);
        };
    }
    
    fn(resolve)
}


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ test: 1 })
    }, 1000)
}).then((data) => {
    console.log('result1', data)
    //dosomething
    return test()
}).then((data) => {
    console.log('result2', data)
})

function test(id) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
        resolve({ test: 2 })
        }, 5000)
    }))
}
//result1 { test: 1 }
//result2 { test: 2 }