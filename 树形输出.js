const list = [
{ id: 1001, parentId: 0, name: 'AA' },
{ id: 1002, parentId: 1001, name: 'BB' },
{ id: 1003, parentId: 1001, name: 'CC' },
{ id: 1004, parentId: 1003, name: 'DD' },
{ id: 1005, parentId: 1003, name: 'EE' },
{ id: 1006, parentId: 1002, name: 'FF' },
{ id: 1007, parentId: 1002, name: 'GG' },
{ id: 1008, parentId: 1004, name: 'HH' },
{ id: 1009, parentId: 1005, name: 'II' },
];
// AA
// BB
//     FF
//     GG
// CC
const treeData = [
{ id: 1001, parentId: 0, name: 'AA', child: [
    { id: 1002, parentId: 1001, name: 'BB', child: [
        { id: 1006, parentId: 1002, name: 'FF' },
        { id: 1007, parentId: 1002, name: 'GG' },
    ] },
    { id: 1003, parentId: 1001, name: 'CC', child: [] },
]},
]

function buildTree(list) {
    const result = [];
    const helper = (item, list) => {
        const pId = item.id;
        const len = list.length;
        item.children = [];
        for (let i = 0; i < len; i++) {
            if (list[i].parentId === pId) {
                list[i] = helper(list[i], list);
                item.children.push(list[i]);
            }
        }
        return item;
    }
    list.forEach((item) => {
        if (!item.parentId) {
            result.push(item);
            helper(item, list);
        }
    });
    return result;
  }
  console.log(JSON.stringify(buildTree(list)));
