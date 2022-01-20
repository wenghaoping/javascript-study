class EventBus {
  constructor() {
    this._events = new Map(); // 存储事件／回调键值对
  }

  // on 监听
  on(type, fn) {
    const handler = this._events.get(type);
    // 获取对应事件名称的函数清单
    if (!handler) {
      this._events.set(type, fn);
    } else if (handler && typeof handler === "function") {
      // 如果handler是函数，说明当前只有一个监听者
      // 再次添加监听者，需要改用 数组储存
      this._events.set(type, [handler, fn]);
    } else {
      // 已有多个监听者，直接往数组里push函数即可
      handler.push(fn);
    }
  }

  // emit 触发
  emit(type, ...args) {
    let handler = this._events.get(type);

    if (Array.isArray(handler)) {
      // 是数组，说明有多个监听者，需要依次触发里边的函数
      for (let i = 0; i < handler.length; ++i) {
        if (args.length > 0) {
          handler[i].apply(this, args);
        } else {
          handler[i].call(this);
        }
      }
    } else {
      // 单个函数的情况直接触发即可
      if (args.length > 0) {
        handler.apply(this, args);
      } else {
        handler.call(this);
      }
    }
    return true;
  }

  // off 移除监听
  off(type, fn) {
    const handler = this._events.get(type);
    if (handler && typeof handler === "function") {
      // 函数，说明只有一个监听者，直接删除就行
      this._events.delete(type);
    } else {
      handler.splice(
        handler.findIndex((e) => e === fn),
        1
      );
    }
  }

  // 单次执行
  once(type, fn) {
    let _self = this;
    function handler() {
      _self.off(type, handler);
      fn.apply(null, arguments);
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
