// 题目：用JS实现一个简单的模板解析器render
// let template = '我叫{{name}}，年龄{{age}}，住址{{address}}';
// let data = {
// name: '小明',
// age: 20,
// address: '深圳南区'
// }
// console.log(render(template, data); // 我叫小明，年龄20，住址深圳南区

// 题目：用JS实现一个throttle节流函数，调用如下：
// function handle() {
// 　　console.log(Math.random());
// }
// window.addEventListener('scroll', throttle(handle, 1000));

// // 题目：实现一个VUE简化版的EventBus类，其调用代码如下：
const eventBus = new EventBus();
eventBus.on("fn1", function (msg) {
  console.log(`订阅的消息是:${msg}`);
});
eventBus.emit("fn1", "你好，世界");

class EventBus {
  constructor() {
    this.events = {};
  }
  on(event, cb) {
    if (!event || !cb) {
      return false;
    }
    this.events[event] = this.events[event] || [];
    this.events[event].push(cb);
  }
}

// 题目：给定一个整数数组，获取数组中n个连续元素，最大的和。例如：
// 输入：arr=[-3, 3, 1, -3, 2, 4, 7], n=3
// 输出：13
// 原因：连续三个数的最大和是 2 + 4 + 7 = 13

function maxSubArray(nums, n) {
  let pre = nums.slice(0, n).reduce((prev, cur) => {
    return prev + cur;
  });
  let max = pre;
  for (let i = n; i < nums.length; i++) {
    pre = pre - nums[i - n] + nums[i];
    max = Math.max(max, pre);
  }
  return max;
}

console.log(maxSubArray([-3, 3, 1, -3, 2, 4, 7], 3));
