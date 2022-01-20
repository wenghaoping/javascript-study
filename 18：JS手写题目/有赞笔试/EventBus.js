// on(event, listener)：为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
// emit(event, [arg1], [arg2])： 按监听器的顺序执行执行每个监听器
// addListener(event, listener)：on的同名函数（alias）
// once(event, listener): 和on类似，但只触发一次，随后便解除事件监听
// removeListener(event, listener)： 移除指定事件的某个监听回调
// removeAllListeners([event])：移除指定事件的所有监听回调
// setMaxListeners(n)：用于提高监听器的默认限制的数量。（默认10监听回调个产生警告）
// listeners(event)： 返回指定事件的监听器数组。
class EventBus {
  constructor() {
    this._events = {};
  }
  // 注册事件和处理函数
  on(type, fn) {
    if (Array.isArray(type)) {
      for (let i = 0; i < type.length; i++) {
        const e = type[i];
        this.on(e, fn);
      }
    } else {
      const event = this._events[type];
      // 存在直接push, 不存在创建为空数组再push
      if (event) {
        event.push(fn);
      } else {
        this._events[type] = [fn];
      }
    }
    console.log(this._events, "_events");
  }
  // 注册事件和处理函数，触发一次后销毁
  once(type, fn) {
    if (Array.isArray(type)) {
      for (let i = 0; i < type.length; i++) {
        const e = type[i];
        this.once(e, fn);
      }
    } else {
      const self = this;
      function hander() {
        self.off(type, fn);
        //emit里面调用时会给on方法传参
        fn.apply(this, arguments);
      }
      hander.fn = fn; //off里面根据这个判断销毁事件
      this.on(type, hander);
    }
  }
  // 触发某事件所有回调并带参数
  emit(type, ...ars) {
    if (Array.isArray(type)) {
      for (let i = 0; i < type.length; i++) {
        const e = type[i];
        this.emit(e);
      }
    } else {
      const events = this._events[type];
      if (events) {
        for (let i = 0; i < events.length; i++) {
          const e = events[i];
          e.apply(this, ars);
        }
      }
    }
  }
  // 销毁事件和处理函数
  off(type, fn) {
    //不传参数表示清空所有
    if (!type) {
      this._events = [];
    }
    //数组循环清空
    if (Array.isArray(type)) {
      type.forEach((e) => {
        this.off(e, fn);
      });
    } else {
      //不传第二参表示清空某事件所有监听函数
      if (!fn) {
        this._events[type] = [];
      }
      const events = this._events[type];
      let index = events.findIndex((f) => f === fn);
      while (index !== -1) {
        events.splice(index, 1);
        index = events.findIndex((f) => f === fn);
      }
    }
    console.log(this._events, "_events");
  }
}

//测试用例
let eb = new EventBus();
eb.once("event1", (params) => console.log(11, params));
eb.on("event2", (params) => console.log(22, params));
eb.emit("event1", 33);
eb.emit("event2", 33);
