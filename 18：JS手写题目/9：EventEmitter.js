class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, callback) {
    let callbacks = this.events[event] || [];
    callbacks.push(callback);
    this.events[event] = callbacks;
    return this;
  }
  off(event, callback) {
    let callbacks = this.events[event];
    this.events[event] = callbacks && callbacks.filter((fn) => fn !== callback);
    return this;
  }
  emit(event, ...args) {
    let callbacks = this.events[event];
    callbacks.forEach((fn) => {
      fn(...args);
    });
    return this;
  }
  once(event, callback) {
    let wrapFun = function (...args) {
      callback(...args);
      this.off(event, wrapFun);
    };
    this.on(event, wrapFun);
    return this;
  }
}

// on(event, listener)：为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// emit(event, [arg1], [arg2])： 按监听器的顺序执行执行每个监听器
// addListener(event, listener)：on的同名函数（alias）
// once(event, listener): 和on类似，但只触发一次，随后便解除事件监听
// removeListener(event, listener)： 移除指定事件的某个监听回调
// removeAllListeners([event])：移除指定事件的所有监听回调
// setMaxListeners(n)：用于提高监听器的默认限制的数量。（默认10监听回调个产生警告）
// listeners(event)： 返回指定事件的监听器数组。

