new Promise(function(resolve, reject) {
    console.log('1');
    resolve();
    console.log('3');
    reject();
    console.log('4');
}).then(function() {
    console.log('2')
}).catch(function() {
    console.log('5');
})
// 1 3 4 2
// 删除resolve
// 1 3 4 5