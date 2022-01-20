// 实现防抖函数（debounce）
// 连续触发在最后一次执行方法，场景：输入框匹配

let debounce = (fn, time = 1000) => {
  let timeLock = null;
  return function (...args) {
    clearTimeout(timeLock);
    timeLock = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
// 实现节流函数（throttle）
// 在一定时间内只触发一次，场景：长列表滚动节流
// 固定间隔时间执行函数
let throttle = (fn, time = 1000) => {
  let flag = true;
  return function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
        fn(...args);
      }, time);
    }
  };
};

// 实现节流函数（throttle）高级版。
function throttle(fn, delay) {
  let timer = null;
  let startTime = Date.now();
  return function () {
    let curTime = Date.now();
    let remaining = delay - (curTime - startTime);
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(context, args);
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
}
// 