class EventEmitter {
  constructor() {
    this.eventMap = [];
  }
  on(type, handler) {
    if (!type || !handler) {
      throw new Error("参数错误");
    }
    if (!(handler instanceof Function)) {
      throw new Error("handler is not function");
    }
    if (!this.eventMap[type]) {
      this.eventMap[type] = [];
    }
    this.eventMap[type].push(handler);
  }
  emit(type, params) {
    if (!type) {
      throw new Error("参数错误");
    }
    if (this.eventMap[type]) {
      this.eventMap[type].forEach((handler) => {
        handler(params);
      });
    }
  }
  off(type) {
    if (!type) {
      throw new Error("参数错误");
    }
    if (this.eventMap[type]) {
        let index = this.eventMap[type].indexOf(handle)
        this.eventMap[type].splice(index, 1)
    }
  }
}
