// slice ，是为了获取到数组中的某一段。
// splice ，是想要替换数组中的某一段。意味着会修改原数组。
let a = [1, 2, 3, 4];
console.log(a);
console.log(a.splice(1, 2, 5, 6, 7));
console.log(a);