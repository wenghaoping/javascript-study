// Promise.resolve().then(() => {
//     console.log(1);
//     return Promise.resolve(3);
// }).then((res) => {
//     console.log(res)
// })

Promise.resolve().then(() => {
    console.log(1);
}).then(() => {
    new Promise(r=>{
        r(3)
    }).then(res=>{
        console.log(res)
    })
})

Promise.resolve().then(() => {
    console.log(2);
}).then(() => {
    console.log(4);
}).then(() => {
    console.log(5);
}).then(() => {
    console.log(6);
}).then(() =>{
    console.log(7);
});

// 1 2 4