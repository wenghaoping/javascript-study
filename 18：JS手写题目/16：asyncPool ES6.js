// 并发控制。
// 下面有8个待办任务要执行，而我们希望限制同时执行的任务个数，即最多只有 2 个任务能同时执行。
// 当 正在执行任务列表 中的任何 1 个任务完成后，程序会自动从 待办任务列表 中获取新的待办任务并把该任务添加到 正在执行任务列表 ，
/*
 * poolLimit（数字类型）：表示限制的并发数；
 * array（数组类型）：表示任务数组；
 * iteratorFn（函数类型）：表示迭代函数，用于实现对每个任务项进行处理，该函数会返回一个 Promise 对象或异步函数。
 */
function asyncPool(poolLimit, array, iteratorFn) {
  let i = 0;
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  function enqueue() {
    // ① 边界条件，array 为空或者 promise 都已达到 resolve 状态
    if (i === array.length) {
      return Promise.resolve();
    }
    const item = array[i++]; // 获取新的任务项
    // ② 生成一个 promise 实例，并在 then 方法中的 onFullfilled 函数里返回实际要执行的 promise，
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);

    let r = Promise.resolve();

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      // ④ 将执行完毕的 promise 移除
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      // ③ 将正在执行的 promise 插入 executing 数组
      executing.push(e);
      // ⑥ 如果正在执行的 promise 数量达到了并发限制，则通过 Promise.race 触发新的 promise 执行
      if (executing.length >= poolLimit) {
        r = Promise.race(executing);
      }
    }

    // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
    // ⑤ 递归执行 enqueue，直到满足 ①
    return r.then(() => enqueue());
  }
  return enqueue().then(() => Promise.all(ret));
}
const timeout = (i) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(i);
      resolve(i);
    }, i)
  );
};

async function test() {
  await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
}
test();
