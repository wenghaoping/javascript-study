// for (var i = 0; i < 5; i++) {
// 	console.log(i);
// }

// for (var i = 0; i < 5; i++) {
// 	(function () {
// 		setTimeout(function() {
// 			console.log(i);
// 		}, 1000 * i)
// 	})(i);
// }

// for (var i = 0; i < 5; i++) {
// 	setTimeout((function(i) {
// 		console.log(i);
// 	})(i), i * 1000);
// }

setTimeout(function() {
	console.log(1)
}, 0);

new Promise(function executor(resolve) {
	console.log(2);
	for( var i=0 ; i<10000 ; i++ ) {
		i == 9999 && resolve();
	}
	console.log(3);
}).then(function() {
	console.log(4);
});
console.log(5);

// 5 2 3 4 1

// 2 3 5 4 1

// function resource() {
// 	console.log(5);
// 	return new Promise(function exe(resolve) {
// 		console.log(1);
// 		setTimeout(() => {
// 			console.log(4);
// 			resolve(2)
// 		}, 10);
// 		console.log(3);
// 	})
// }
// resource().then(res => {
// 	console.log(res)
// });

// for (var i = 0; i < 5; i++) {
// 	(function (i) {
// 		setTimeout(function() {
// 			console.log(new Date, i);
// 		}, 1000);
// 	})(i)
// }
// let loop = (i) => {
// 	setTimeout(() => {
// 		console.log(new Date, i);
// 	}, 1000);
// };
//
// for (var i = 0; i < 5; i++) {
// 	loop(i);
// }
//
//
//
// console.log(new Date, i);
//0 -> 1 -> 2 -> 3 -> 4 -> 5

const tasks = [];
for (var i = 0; i < 5; i++) {   // 这里 i 的声明不能改成 let，如果要改该怎么做？
	((j) => {
		tasks.push(new Promise((resolve) => {
			setTimeout(() => {
				console.log(new Date, j);
				resolve();  // 这里一定要 resolve，否则代码不会按预期 work
			}, 1000 * j);   // 定时器的超时时间逐步增加
		}));
	})(i);
}

Promise.all(tasks).then(() => {
	setTimeout(() => {
		console.log(new Date, 'test', i);
	}, 1000);   // 注意这里只需要把超时设置为 1 秒
});


