1.实现destructuringArray方法，达到如下效果
// destructuringArray( [1,[2,4],3], "[a,[b],c]" );
// result
// { a:1, b:2, c:3 }
复制代码2.需要通过threshold参数控制调用函数频率
const yourFunction = function(func, threshold) {
 // 请实现
}
const triggerSearch = yourFunction((val) => {
  const {
    onSearch
  } = this.props
  onSearch(val)
}, 300)
triggerSearch(searchText)
复制代码我的答案（可以先不看，自己现实一下）
// 第一题
const targetArray = [1, [2, 3], 4];
const formater = "[a, [b], c]";
const formaterArray = ['a', ['b'], 'c'];

const destructuringArray = (values, keys) => {
  try {
    const obj = {};
    if (typeof keys === 'string') {
      keys = JSON.parse(keys.replace(/\w+/g, '"$&"'));
    }
    
    const iterate = (values, keys) =>
      keys.forEach((key, i) => {
        if(Array.isArray(key)) iterate(values[i], key)
        else obj[key] = values[i]
      })
      
    iterate(values, keys)
    
    return obj;
  } catch (e) {
    console.error(e.message);
  }
}

console.dir(destructuringArray(targetArray,formater));
console.dir(destructuringArray(targetArray,formaterArray));

// 第二题
const yourFunction = function(func, threshold) {
  let timeOut;
  return function() {
    if (!timeOut) {
      timeOut = setTimeout(() => {
        timeOut = null;
        func.apply(this, arguments)
      }, threshold)
    }
  }
}

const triggerSearch = yourFunction((val) => {
  const {
    onSearch
  } = this.props
  onSearch(val)
}, 300)
triggerSearch(searchText)

作者：Gavin1995
链接：https://juejin.cn/post/6844903566776205319
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。