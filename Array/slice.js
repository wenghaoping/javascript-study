// slice 函数中传入原数组的起点索引位置与终点位置，
// 返回一个新数组。资料里还专门强调了，原数组不能被改变。
let a = [1, 2, 3, 4];
console.log(a.slice(1, [3]))

console.log(a.slice(1, [3, 4]))

console.log(a.slice(1, 'b'))

console.log(a.slice(1, '2b'))

console.log(a.slice(1, '2'))

console.log(a.slice(1, {}))

console.log(a.slice(1, 2))