let debounce = (fn, time = 1000) => {
  let timeLock = null;
  return function (...args) {
    clearTimeout(timeLock);
    timeLock = setTimeout(() => {
      fn(...args);
    }, time);
  };
};
