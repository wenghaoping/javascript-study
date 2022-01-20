// 那Vue对于数组类型是怎么处理的，简单模拟一下数组的方法监听。

const render = (action, ...args) => {
  console.log(`Action=${action} args=${args.join(",")}`);
};
// 保存数组的原型
const arrPrototype = Array.prototype;
// 创建一个新的数组原型
const newPortotype = Object.create(arrPrototype);
const reactive = (obj) => {
  if (Array.isArray(obj)) {
    // 把新定义的原型对象指向obj.__proto__
    obj.__proto__ = newPortotype;
  }
};
const methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];
methodsToPatch.forEach((methods) => {
  newPortotype[methods] = function (...args) {
    // 执行原有数组的方法
    arrPrototype[methods].call(this, ...args);
    // 渲染
    render(methods, ...args);
  };
});
const data = [1, 2, 3, 4];
reactive(data);

data.push(5); // Action = push, args= 5
data.splice(0, 2); // Action = splice, args= 0, 2
