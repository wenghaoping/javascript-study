function goodEmptyCheck(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}

console.log(goodEmptyCheck(new Object())); // true
console.log(goodEmptyCheck(new String())); // false
console.log(goodEmptyCheck(new Number())); // false
console.log(goodEmptyCheck(new Boolean())); // false
console.log(goodEmptyCheck(new Array())); // false
console.log(goodEmptyCheck(new RegExp())); // false
console.log(goodEmptyCheck(new Function())); // false
console.log(goodEmptyCheck(new Date())); // false
console.log(goodEmptyCheck(new Error())); // false
console.log(goodEmptyCheck(null)); // TypeError
console.log(goodEmptyCheck(undefined)); // TypeError

function goodEmptyCheck2(value) {
  return (
    value && Object.keys(value).length === 0 && value.constructor === Object
  );
}
console.log(goodEmptyCheck2(null)); // TypeError
console.log(goodEmptyCheck2(undefined)); // TypeError
