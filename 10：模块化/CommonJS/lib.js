// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
function outCounter() {
    return counter;
  }
module.exports = {
  counter: counter,
  incCounter: incCounter,
  outCounter: outCounter,
};
