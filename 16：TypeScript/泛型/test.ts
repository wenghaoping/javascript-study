function foo<T extends any>(val: T): T {
  return val;
}

const res = foo("res");
const res2 = foo(123);
const res3 = foo([1, 3, "3", null, []]);
