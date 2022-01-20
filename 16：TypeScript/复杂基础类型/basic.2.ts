/** 子元素是数字类型的数组 */
let arrayOfNumber: number[] = [1, 2, 3];
let arrayOfString: string[] = ["a", "b", "c"];

// 泛型
let arrayOfNumber2: Array<number> = [1, 2, 3];
let arrayOfString2: Array<string> = ["a", "b", "c"];

// const str: string = 'string';
// if (typeof str === 'number') {
//   str.toLowerCase(); // Property 'toLowerCase' does not exist on type 'never'.ts(2339)
// }

const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find(
  (num: number) => num > 2
) as number;
const grThan3: number = <number>arrayNumber.find((num: number) => num > 2);

type Adder = (a: number, b: number) => number; // TypeScript 函数类型定义
const add: Adder = (a, b) => a + b; // ES6 箭头函数
