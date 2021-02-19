function sum(arr) {
    // console.log(arr);
    let len = arr.length;
    if (len === 0) {
        return 0;
    } else if (len === 1) {
        return arr[0];
    } else {
        // console.log(arr.slice(1));
        return arr[0] + sum[arr.slice(1)];
    }
}
console.log(sum([1, 2, 3, 4]))
// console.log([1, 2, 3, 4].slice(0, 1))