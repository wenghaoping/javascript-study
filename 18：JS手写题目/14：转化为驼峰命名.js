var s1 = "get-element-by-id";
// 转化为 getElementById

var f = function (s) {
  return s.replace(/-\w/g, function (x) {
    return x.slice(1).toUpperCase();
  });
};
