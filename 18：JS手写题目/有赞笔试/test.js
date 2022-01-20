//程序运行完成时一定要有输出语句，本工具才能正确展示运行结果。
console.log("Hello JSRUN!- from NodeJS .");
class EventBus {
  constructor() {
    // 全局定义一个_events属性，存储事件
    this._events = new Map();
  }
  once(event, fn) {
    // 消息队列中仅保存一个消息
    // 无需检查msgName是否存在
    this._events.set(event, fn);
  }
  on(event, fn) {
    // 将消息保存到当前的消息队列中
    this._events.set(event, [...(this._events.get(event) || []), fn]);
  }
  emit(event, msg) {
    // 发送消息
    if (!this._events.has(event)) {
      return false;
    }
    let arr = this._events.get(event);
    arr.map((fn) => {
      fn(msg);
    });
  }
  off(event) {
    this._events.delete(event);
  }
}
const bus = new EventBus();
bus.on("hi", function (msg) {
  console.log(`订阅的消息是：${msg}`);
});
bus.emit("hi", 123213);
bus.off("hi");
bus.emit("hi", 111);
