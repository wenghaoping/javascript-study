let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

function buildTree(lists) {
  const result = [];
  const itemMap = new Map();
  for (const item of lists) {
    const id = item.id;
    const pid = item.pid;
    if (!itemMap.has(id)) {
      itemMap.set(id, { ...item, children: [] });
    }
    const treeItem = itemMap.get(id);
    if (pid === 0) {
      result.push(treeItem);
    } else {
      itemMap.get(pid).children.push(treeItem);
    }
  }
  return result;
}
console.log(JSON.stringify(buildTree(arr)));
// 将上面的转为下面的数据
// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     // 结果 ,,,
//                 ]
//             }
//         ]
//     }
// ]
