function EventEmitter() {
    this.handlers = {}
}
//监听事件，该事件可以被触发多次
EventEmitter.prototype.on = function (eventName, handle) {
    if (!this.handlers.hasOwnProperty(eventName)) {
        this.handlers[eventName] = []
    }
    this.handlers[eventName].push(handle)
}
//也是监听事件，但只能被触发一次
EventEmitter.prototype.once = function (eventName, handle) {
    
}
//触发指定的事件
EventEmitter.prototype.fire = function (eventName, ...params) {
    if (!this.handlers.hasOwnProperty(eventName)) return
    //事件队列依次执行
    this.handlers[eventName].map(handle => {
        handle(...params)
    })
}
//移除指定事件的某个回调方法或者所有回调方法
EventEmitter.prototype.off = function (eventName, handle) {
    if (!this.handlers.hasOwnProperty(eventName)) return
    //获取下标，并删除
    let index = this.handlers[eventName].indexOf(handle)
    this.handlers[eventName].splice(index, 1)
}
 
const emitter = new EventEmitter();
emitter.on('drink', (person) => {
    console.log(person + '喝水')
})
emitter.on('eat', (person) => {
    console.log(person + '吃东西')
})
// event.once('buy', (person) => {
// console.log(person + '买东西')
// })
emitter.fire('drink', '我') // 我喝水
emitter.fire('drink', '我') // 我喝水
emitter.fire('eat', '其它人') // 其它人吃东西
emitter.fire('eat', '其它人') // 其它人吃东西
emitter.fire('buy', '其它人') //其它人买东西
emitter.fire('buy', '其它人') //这里不会再次触发buy事件，因为once只能触发一次
emitter.off('eat') //移除eat事件
emitter.fire('eat', '其它人') //这里不会触发eat事件，因为已经移除了