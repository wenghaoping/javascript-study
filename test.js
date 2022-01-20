// 假设本地机器无法做加减乘除运算，需要通过远程请求让服务端来实现。
// 以加法为例，现有远程API的模拟实现

const addRemote = async (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000);
  });

// 请实现本地的add方法，调用addRemote，能最优的实现输入数字的加法。
// async function add(...inputs) {
//   // 你的实现
//   let sum = 0;
//   if (inputs.length < 2) {
//     return inputs[0];
//   }
//   for (let key of inputs) {
//     sum = await addRemote(sum, key);
//   }
//   return sum;
// }
async function add(...args) {
  if (args.length <= 1) return Promise.resolve(args[0]);
  const promiseList = [];
  for (let i = 0; i * 2 < args.length - 1; i++) {
    const promise = addRemote(args[i * 2], args[i * 2 + 1]);
    promiseList.push(promise);
  }

  if (args.length % 2) {
    const promise = Promise.resolve(args[args.length - 1]);
    promiseList.push(promise);
  }

  return Promise.all(promiseList).then((results) => add(...results));
}

// 请用示例验证运行结果:
add(1, 2).then((result) => {
  console.log(result); // 3
});
add(3, 5, 2).then((result) => {
  console.log(result); // 10
});
