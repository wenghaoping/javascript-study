function curry(f) {
  const g = (...args) => {
    if (args.length >= f.length) {
      return f(...args);
    }
    return (...left) => {
      return g(...args, ...left);
    };
  };
  return g;
}

function _add(a, b, c, d) {
  return a + b + c + d;
}
const add = curry(_add);
console.log(add(1)(2)(3)(4));
console.log(add(1, 2)(3, 4));
