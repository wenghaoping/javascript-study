// 下面来创建第一个使用泛型的例子：
// identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是 echo命令。

// 不用泛型的话，这个函数可能是下面这样：

function identity(arg: number): number {
    return arg;
}
// 或者，我们使用any类型来定义函数：

function identity2(arg: any): any {
    return arg;
}
// 使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：
// 传入的类型与返回的类型应该是相同的。如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

// 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。
// 这里，我们使用了 类型变量，它是一种特殊的变量，只用于表示类型而不是值。

function identity3<T>(arg: T): T {
    return arg;
} 

let output = identity3<string>("myString");