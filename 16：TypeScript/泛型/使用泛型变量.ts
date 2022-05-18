// 如果我们想同时打印出arg的长度。 我们很可能会这样做：

function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
// 如果这么做，编译器会报错说我们使用了arg的.length属性，但是没有地方指明arg具有这个属性。 记住，这些类型变量代表的是任意类型，所以使用这个函数的人可能传入的是个数字，而数字是没有 .length属性的。

// 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像创建其它数组一样创建这个数组：

function loggingIdentity2<T extends Array<T>>(arg: T): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

// 泛型类型

function identity<T>(arg: T): T {
    return arg;
}
let myIdentity: <T>(arg: T) => T = identity;

// 泛型接口

interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity2: GenericIdentityFn = identity;