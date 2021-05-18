// 1:采用递归去拷贝所有层级属性
function deepClone(obj){
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj==='object') {
        for (key in obj){
            if(obj.hasOwnProperty(key)) {
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key] && typeof obj[key] === 'object'){
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
} 
let a = [1,2,3,4];
b = deepClone(a);
a[0] = 2;
console.log(a,b);

// 2:通过JSON对象来实现深拷贝
function deepClone2(obj) {
    var _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
    return objClone;
}
