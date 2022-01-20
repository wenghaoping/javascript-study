// 2. 编译器acorn
// 轻量级编辑器，es6，对比webpack，比较小。
https://astexplorer.net/ https://www.npmjs.com/package/acorn
   
const acorn = require("acorn");
const walk = require("./walk"); 
const code =
`
import { a } from "./foo"; console.log("Hello" + a); console.log("World");
export const b = 1
`
let ast = acorn.parse(code, { locations: true, // 索引位置 ranges: true,
    sourceType: "module", ecmaVersion: 7,
}); 