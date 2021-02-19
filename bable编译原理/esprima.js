var esprima = require('esprima');
var program = 'const answer = 42';
var program2 = 'const test = () => {let a = "你好"; return a};';
// 词法分析的接口
console.log(esprima.tokenize(program));
// [ { type: 'Keyword', value: 'const' },
//   { type: 'Identifier', value: 'answer' },
//   { type: 'Punctuator', value: '=' },
//   { type: 'Numeric', value: '42' } ] 数字

// 语法分析的接口
console.log(JSON.stringify(esprima.parse(program2)));
// {
//     "type": "Program",
//     "body": [
//         {
//             "type": "VariableDeclaration",
//             "declarations": [
//                 {
//                     "type": "VariableDeclarator",
//                     "id": {
//                         "type": "Identifier",
//                         "name": "answer"
//                     },
//                     "init": {
//                         "type": "Literal",
//                         "value": 42,
//                         "raw": "42"
//                     }
//                 }
//             ],
//             "kind": "const"
//         }
//     ],
//     "sourceType": "script"
// }


// [ { type: 'Keyword', value: 'const' }, 关键字
//   { type: 'Identifier', value: 'test' }, 标识符
//   { type: 'Punctuator', value: '=' }, 符号
//   { type: 'Punctuator', value: '(' },
//   { type: 'Punctuator', value: ')' },
//   { type: 'Punctuator', value: '=>' },
//   { type: 'Punctuator', value: '{' },
//   { type: 'Keyword', value: 'let' },
//   { type: 'Identifier', value: 'a' },
//   { type: 'Punctuator', value: '=' },
//   { type: 'String', value: '"你好"' },
//   { type: 'Punctuator', value: ';' },
//   { type: 'Keyword', value: 'return' },
//   { type: 'Identifier', value: 'a' },
//   { type: 'Punctuator', value: '}' },
//   { type: 'Punctuator', value: ';' } ]