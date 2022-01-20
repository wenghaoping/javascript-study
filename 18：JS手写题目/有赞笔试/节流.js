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
