let onWatch = (obj, setBind, getLogger) => {
  return new Proxy(obj, {
    get(target, property, receiver) {
      getLogger(target, property);
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      setBind(value);
      return Reflect.set(target, property, value);
    },
    deleteProperty(target, property) {},
  });
};

let obj = { a: 1 };
let value;
let p = onWatch(
  obj,
  (v) => {
    value = v;
  },
  (target, property) => {
    console.log(`Get '${property}' = ${target[property]}`);
  }
);
p.a = 2; // bind `value` to `2`
p.a; // -> Get 'a' = 2
