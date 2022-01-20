const _flat = function (arr) {
  // return arr.toString().split(',');
  // while (arr.some(i => Array.isArray(i))) {
  //     arr = [].concat(...arr);
  // }
  // return  arr;
  const result = [];
  const foo = function (l) {
    l.forEach((i) => {
      if (Array.isArray(i)) {
        foo(i);
      } else {
        result.push(i);
      }
    });
  };
  foo(arr);
  return result;
};

console.log(flat([1, [2, [3, 4, [5, [7]]]]]));
