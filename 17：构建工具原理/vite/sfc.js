// SFC组件支持
  const compilerSfc = require("@vue/compiler-sfc"); // .vue 
  const compilerDom = require("@vue/compiler-dom"); // 模板
 
if (url.endsWith(".css")) {
const p = path.resolve(__dirname, url.slice(1)); const file = fs.readFileSync(p, "utf-8");
const content = `
const css = "${file.replace(/\n/g, "")}"
let link = document.createElement('style') link.setAttribute('type', 'text/css') document.head.appendChild(link)
link.innerHTML = css
export default css
`;
ctx.type = "application/javascript";
ctx.body = content;
} else if (url.indexOf(".vue") > -1) {
// vue单文件组件
const p = path.resolve(__dirname, url.split("?")[0].slice(1));
const { descriptor } = compilerSfc.parse(fs.readFileSync(p, "utf-8"));
if (!query.type) {
ctx.type = "application/javascript";
// 借用vue自导的compile框架 解析单文件组件，其实相当于vue-loader做的事情 ctx.body = `
${rewriteImport(
descriptor.script.content.replace("export default ", "const __script = ")
)}
import { render as __render } from "${url}?type=template" __script.render = __render
export default __script
;
} else if (query.type === "template") {
// 模板内容
const template = descriptor.template;
// 要在server端吧compiler做了
const render = compilerDom.compile(template.content, { mode: "module" })
.code;
ctx.type = "application/javascript";
ctx.body = rewriteImport(render); }
}