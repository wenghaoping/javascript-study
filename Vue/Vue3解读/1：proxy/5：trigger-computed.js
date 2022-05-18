// 分析问题的原因，我们发现，从本质上看这就是一个典型的effect 嵌套。一个计算属生
// 部拥有自己的effect， 并且它是懒执行的，只有当真正读取计算屬性的值时才会执行。对于训
// 属性的 getter 西数来说，它里面访问的响应式数据只会把computed 内部的effect 收集为依裁
// 而当把计算属性用于另外一个effect 时，就会发生effect 嵌套，外层的effect 不会被内
// effect 中的响应式数据收集。
function computed(getter) {
  // value用来缓存上一次的值
  let value;
  // dirty标志，用来标识是否需要重新计算值，为true 则意味着脏，需要静思园
  let dirty = true;
  const effectFn = effect(getter, {
    lazy: true,
    scheduler() {
      if (!dirty) {
        dirty = true;
        // 当计算属性依赖的响应式数据变化是，手动调用trigger函数触发响应
        trigger(obj, "value");
      }
    },
  });
  const obj = {
    get value() {
      // 只有脏 时才计算值，并将的到的值缓存到vlaue中
      if (dirty) {
        // 读取value时才执行effectFn
        value = effectFn();
        // 将dirty 设置为false， 下一次访问直接使用缓存到vlaue中的值
        dirty = false;
      }
      // 当读取value时，手动调用track函数进行追踪
      track(obj, "value");
      return value;
    },
  };
  return obj;
}

// ==============================
const data = { foo: 1, bar: 2 };
const obj = new Proxy(data, {});
const sumRes = computed(() => obj.foo + obj.bar);

effect(() => {
  // 在该副作用函数中读取 sumRes.value
  console.log(sumRes.value);
});

// 修改obj.foo的值
obj.foo++;
