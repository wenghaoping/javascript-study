console.log('a'); // 
setTimeout(function() {
    console.log('b'); // 
    process.nextTick(function() {
        console.log('c');
    })
    new Promise(function(resolve) {
        console.log('d');
        resolve();
    }).then(function() {
        console.log('e')
    })
})
process.nextTick(function() {
    console.log('f');
})
new Promise(function(resolve) {
    console.log('g'); // 
    resolve();
}).then(function() {
    console.log('h') // 
})

setTimeout(function() {
    console.log('i');
    process.nextTick(function() {
        console.log('j');
    })
    new Promise(function(resolve) {
        console.log('k');
        resolve();
    }).then(function() {
        console.log('l')
    })
})



// real
// a g f h b d c e i k j l
// 

// a g h b d i k e i
// a g h b d i k e l

// a g h b d e i k l




 