var arr = [];
let arrayLike={
    0:'a',
    1:'b',
    2:'c',
    length:3
}
console.log('快捷1=>', Array.from(arrayLike));
for (var i = 0; i < arrayLike.length; i++) {
    arr.push(arrayLike[i]);
}
console.log('原理=>',arr);
//等价写法
console.log('快捷=>',[].slice.call(arrayLike));
// 复制代码
