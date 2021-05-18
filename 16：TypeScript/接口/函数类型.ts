interface SearchFunc {
    (source: string, subString: string): boolean;
}
// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

let mySearch: SearchFunc = (source: string, subString: string) => {
  let result = source.search(subString);
  return result > -1;
}
