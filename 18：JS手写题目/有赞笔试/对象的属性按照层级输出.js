// object
let obj = {
  a: {
    b: {
      c: {
        d: 1,
      },
    },
  },
  e: 2,
  f: {
    g: 3,
  },
};
// 输出
// result2 = [[a, e, f], [b, g], [c], [d]];
function getBfs(data) {
  let depth = -1;
  let result = [];
  function bfs(obj) {
    depth++;
    if (typeof obj === "object" && Object.keys(obj).length > 0) {
      Object.keys(obj).forEach((key) => {
        result[depth] ? result[depth].push(key) : (result[depth] = [key]);
        bfs(obj[key]);
      });
    }
    depth--;
  }
  bfs(data);
  return result;
}

console.log(getBfs(obj));
