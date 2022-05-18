// 存储副作用函数的值
const bucket = new WeakMap();
let activeEffect;
function effect(fn) {
  activeEffect = fn;
  fn();
}
effect(() => {
  console.log("effecr.run");
  document.body.innerText = obj.text;
});
// 原始数据
const data = { text: "hell world" };

// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 没有activeEffect，直接return
    if (!activeEffect) return;
    // 根据target 从桶中取的depsMap,它也是一个map类型：key --> effects
    let depsMap = bucket.get(target);
    // 如果不存在depsMap，那么新建一个map并与target关联
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()));
    }
    // 再根据key从depsMap中取得deps,它是一个set类型，
    // 里面存储这所有与当前key相关联的副作用函数：effects
    let deps = depsMap.get(key);
    // 如果deps不存在，同样新建一个set并与key关联
    if (!deps) {
      depsMap.set(key, (deps = new Set()));
    }
    // 最后将当前激活的副作用函数添加到桶里
    deps.add(activeEffect);

    // 返回属性值
    return target[key];
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal;
    // 更具target 从桶中取得depsMap,它是key --> effects
    const depsMap = bucket.get(target);
    if (!depsMap) return;
    // 更具key取得所有副作用函数 effects
    const effects = depsMap.get(key);
    // 把副作用函数从桶里取出并执行
    effects && effects.forEach((fn) => fn());
  },
});

setTimeout(() => {
  obj.text = "hello vue3";
}, 1000);
