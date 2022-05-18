// watch的本质里用了effect以及options.scheduler选项

effect(
  () => {
    console.log(obj.foo);
  },
  {
    scheduler() {
      // 当obj.foo的值变化时，会执行scheduler 调度函数
    },
  }
);

// =================================
// watch 函数接收两个参数，source 是响应式数据，cb是回调函数
function watch(source, cb) {
  effect(
    // 触发读取操作，从而建立联系
    () => source.foo,
    {
      scheduler() {
        // 当数据变化时，调用回调函数cb
        cb();
      },
    }
  );
}

const data = { foo: 1 };
const obj = new Proxy(data, {});

watch(obj, () => {
  console.log("数据变化了");
});

obj.foo++;
