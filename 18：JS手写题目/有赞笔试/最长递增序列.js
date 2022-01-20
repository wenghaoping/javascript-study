const maxLength = function (str) {
  const result = [];
  let maxCount = 0;
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    result[i] = 0;
    if (s == 1) {
      result[i] = (result[i - 1] || 0) + 1;
      if (maxCount < result[i]) {
        maxCount = result[i];
      }
    }
  }
  return maxCount;
};
console.log(maxLength("1011101101111110101"));

function maxLength2(str) {
  let dp = new Array(str.length).fill(0);
  dp[0] = str[0];
  let maxCount = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] == 1) {
      dp[i] = dp[i - 1] + 1;
      if (maxCount < dp[i]) {
        maxCount = dp[i];
      }
    }
  }
  return maxCount;
}
