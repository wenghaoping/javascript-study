async function async1() {
  console.log("a"); // -----
  await async2();
  console.log("b"); // -----
}
async function async2() {
  console.log("c"); // -----
}
console.log("d"); // -----
setTimeout(() => {
  console.log("e");
}, 0);
async1();
new Promise(function (reslove) {
  console.log("f"); // -----
  reslove();
}).then(function () {
  console.log("g");
});
console.log("h"); // -----

// w
// d a c b f h g e
// Really
// d a c f h b g e
