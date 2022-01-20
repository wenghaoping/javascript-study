//来简单实现一个响应式函数？ 能对一个对象内的所有key添加响应式特性？要求最终的输出如下方代码所示

const reactive = (obj) => {
  if (typeof obj === "object") {
    for (const key in obj) {
      defineReactive(obj, key, obj[key]);
    }
  }
};

const render = (key, val) => {
  console.log(`SET key=${key} val=${val}`);
};

const defineReactive = (obj, key, val) => {
  reactive(val);
  Object.defineProperty(obj, key, {
    get() {
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      render(key, val);
    },
  });
};

const data = {
  a: 1,
  b: 2,
  c: {
    c1: {
      af: 999,
    },
    c2: 4,
  },
};
reactive(data);
data.a = 5; // SET key=a val=5
data.b = 7; // SET key b val=7
data.c.c2 = 4; //
data.c.c1.af = 121; // SET key=af val=121
