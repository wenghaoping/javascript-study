// 只复制第一层的浅拷贝
// for···in只循环第一层
function simpleCopy(obj1) {
    var obj2 = Array.isArray(obj1) ? [] : {};
    for (let i in obj1) {
    obj2[i] = obj1[i];
   }
    return obj2;
 }
 var obj1 = {
    a: 1,
    b: 2,
    c: {
          d: 3
       }
 }
 var obj2 = simpleCopy(obj1);
 obj2.a = 3;
 obj2.c.d = 4;
 alert(obj1.a); // 1
 alert(obj2.a); // 3
 alert(obj1.c.d); // 4
 alert(obj2.c.d); // 4

 // Object.assign方法
 var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign(obj);
obj1.a = 3;
console.log(obj.a) // 3