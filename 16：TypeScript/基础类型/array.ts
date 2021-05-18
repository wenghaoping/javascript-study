// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list: number[] = [1, 2, 3];
// list[0] = '你好';


// 第二种方式是使用数组泛型，Array<元素类型>：
let list2: Array<number> = [1, 2, 3];

// 元组 Tuple

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error