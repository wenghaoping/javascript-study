// 读取文件 收集依赖 编译与AST解析
const fs = require('fs');
const path = require('path');
// 把代码改成AST语法树。
const parser = require('@babel/parser');
// 分析代码中那些地方有import.
const traverse = require('@babel/traverse').default;
// es5-2-es6
const babel = require('@babel/core');
function getModuleInfo(file) {
    // 读取文件
    const body = fs.readFileSync(file, "utf-8");
    // 转化AST语法树
    const ast = parser.parse(body, {
        sourceType: "module", //表示我们要解析的是ES模块 
    });
    // 依赖收集
    const deps = {};
    traverse(ast, {
        // visitor
        ImportDeclaration({ node }) {
            const dirname = path.dirname(file);
            const abspath = "./" + path.join(dirname, node.source.value);
            deps[node.source.value] = abspath; 
        },
    });
    // ES6转成ES5
    const { code } = babel.transformFromAst(ast, null, {
            presets: ["@babel/preset-env"]
        }
    );
    const moduleInfo = { file, deps, code };
    return moduleInfo;
}

 
/**
* 模块解析
* @param {*} file * @returns
*/
function parseModules(file) {
    const entry = getModuleInfo(file); const temp = [entry];
    const depsGraph = {};
    getDeps(temp, entry);
    temp.forEach((moduleInfo) => { 
        depsGraph[moduleInfo.file] = {
            deps: moduleInfo.deps,
            code: moduleInfo.code, 
        };
    });
    return depsGraph;
}

/**
* 获取依赖
* @param {*} temp
* @param {*} param1 */

function getDeps(temp, { deps }) { 
    Object.keys(deps).forEach((key) => {
        const child = getModuleInfo(deps[key]); 
        temp.push(child);
        getDeps(temp, child);
    }); 
}
const info = getModuleInfo("./src/index.js"); 
console.log("info:", info);
 
