const Koa = require("koa");
const app = new Koa();
app.use(async (ctx) => {
  const {
    request: { url, query },
  } = ctx;
  console.log("url:" + url, "query type", query.type); // 首⻚
  if (url == "/") {
    ctx.type = "text/html";
    let content = fs.readFileSync("./index.html", "utf-8");
    ctx.body = content;
  }
});
app.listen(3000, () => {
  console.log("Vite Start ....");
});
