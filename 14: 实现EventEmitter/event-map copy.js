class EventBus {
  constructor() {
    this._events = new Map(); // 存储事件／回调键值对
  }

  on(type, fn) {
    const handler = this._events.get(type);
    if (!handler) {
      this._events.set(type, fn);
    } else if (handler && typeof handler === 'function') {
      this._events.set(type, [handler, fn])
    } else {
      handler.push(fn);
    }
  }
  emit(type, ...args) {
    let handler = this._events.get(type);
    if(Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        if(args.length > 0) {
          handler[i].apply(this, args);
        } else {
          handler[i].call(this)
        }
      }
    } else {
      if(args.length > 0) {
        handler.apply(this, args);
      } else {
        handler.call(this)
      }
    }
  }
  off (type, fn) {
    const handler = this._events.get(type);
    if (handler && typeof handler === "function") {
      this._events.delete(type);
    } else {
      handler.splice(
        handler.findIndex((e) => e === fn),
        1
      )
    }
  }
  once(type, fn) {
    let _self = this;
    function handler() {
      _self.off(type, handler);
      fn.apply(null, arguments)
    }
    this.on(type, handler);
  }
}

// 下面是 测试代码
function test1(...params) {
  console.log(11, params);
}

function test2(...params) {
  console.log(22, params);
}

function test3(...params) {
  console.log(33, params);
}

function test4(...params) {
  console.log(params);
  console.log(44, params);
}

//测试用例
let eb = new EventBus();
eb.on("event1", test1);
eb.on("event1", test2);
eb.on("event1", test3);
eb.emit("event1", "第一次");

eb.off("event1", test1);
eb.emit("event1", ["第二次1", "第二次2"]);

eb.once("once", test4);
eb.emit("once", "执行一次", 1, 2, 3);
