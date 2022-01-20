// JSON.stringify 实现深拷贝还是有一些地方值得注意
// 拷贝的对象的值中如果有函数、undefined、symbol 这几种类型，
// 经过 JSON.stringify 序列化之后的字符串中这个键值对会消失；
// 拷贝 Date 引用类型会变成字符串；
// 无法拷贝不可枚举的属性；
// 无法拷贝对象的原型链；
// 拷贝 RegExp 引用类型会变成空对象；
// 对象中含有 NaN、Infinity 以及 -Infinity，JSON 序列化的结果会变成 null；
// 无法拷贝对象的循环应用，即对象成环 (obj[key] = obj)。
