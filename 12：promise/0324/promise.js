console.log(1);
setTimeout(() => {
    console.log(2);
    new Promise((resolve, reject) => {
        console.log(3);
        setTimeout(() => console.log(4), 0);
        for(let i = 1; i < 1000; i++) {
            resolve();
        }
        reject()
        console.log(5);
    }).then(() => {
        setTimeout(() => console.log(12), 0);
        console.log(11);
    }).catch(e => {
        console.log(e, '=====')
    })
    console.log(6);
    setTimeout(() => {
        console.log(7);
    }, 0)
}, 0)

Promise.resolve().then(() => {
    console.log(8);
})
setTimeout(() => {
    console.log(10);
}, 
0)

// 1 8 2 3 5 6 11 10 4 7 12
// reject
// 1 8 2 3 6 11 10 4 7 12
// W
// 1 8 2 3 5 11 6 4 12 7 8 10














