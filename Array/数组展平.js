let arrs = [[1, 2], [[3], 4]];
// [1,2,3,4]


// 1、ES6 的方法
const newArr = arrs.flat(Infinity); 
console.log(newArr);
// 2、ES5 数组方法
const newArr = arrs.toString().split(',').map(Number); // 数组的每一项都变成了字符串，还需处理字符串
console.log(newArr);

// 3、递归
function flatten(arr) {
　　return [].concat(
　　　　...arr.map(x=>
　　　　　　Array.isArray(x) ? flatten(x) : x
　　　　)
　　)
}
console.log(flatten(arrs))