### Symbol

1. 用来解决属性名冲突的问题，构造唯一的属性名或者变量

2. 私有属性

```js
function getObj() {
  const symbol = Symbol("test");

  const obj = {};

  obj[symbol] = "test";

  return obj;
}
```

#### Coding

1. 如何让一个对象可遍历

2. JSON.stringfy 会忽略 symbol？除了这个，还会忽略什么呢？

3. 如果对象有循环引用，可以用 JSON.stringify 来处理吗

会报错

4. 确定是 stringify 会报错，而不是 parse 会报错吗？

stringify 会报错，stringify 会尝试把所有的对象都都序列化，序列化的时候发现还有其他对象，就会继续序列化，
就导致循环引用，如果不阻止，就会导致堆栈溢出，到达内存上线，所以内部直接就帮助你报错了。

5. 实现一个深拷贝

### 4. 平时都如何判断对象类型的呀，分别适合哪些场景呢？

- typeof
- instanceof
- Object.prototype.toString.call(obj);
- Array.isArray

#### Coding

1. 实现一下 instanceof

## 算法

二叉树层序遍历相关的各种变形

