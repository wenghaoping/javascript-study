// const Api = (type, params) => {
//   const apiLab = {
//     toBeReviewed: "toBeReviewed", // 待审核
//     approved: "approved", // 审核通过
//     failed: console.log("failed"), // 审核不通过
//     aaa: console.log("1232123212321"), // 审核不通过
//   };
//   return apiLab[type];
// };

// Api("1111");

// const host = (type) => {
//   const mHost = {
//     development: "http://m.sqaproxy.tangeche.com/",
//     prepub: "https://m.prepub.tangeche.com/",
//     production: "https://m.tangeche.com/",
//   };
//   return mHost[type];
// };

// console.log(host("production"));

const arr = [
  { id: 4, labelName: "宝马" },
  { id: 5, labelName: "1111" },
];

const arr2 = arr.map((item) => {
  return {
    id: item.id,
    value: item.labelName,
  };
});
console.log(arr2);
