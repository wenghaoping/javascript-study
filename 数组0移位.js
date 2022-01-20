// 给你数组，0的都挪到数组最后面
function removeZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] === 0) {
      arr.splice(i, 1);
      i--;
      count++;
    }
  }
  for (let i = 0; i < count; i++) {
    arr.push(0);
  }
  return arr;
}
let arr = [0, 0, 1, 2, 3, 0, 1, 4, 7];
// let arr = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
console.log(removeZeros(arr));
