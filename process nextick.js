process.nextTick(function A() {
	console.log(1);

	process.nextTick(function B(){setTimeout(function timeout() {
		console.log('TIMEOUT FIRED2');
	}, 10)});
});

setTimeout(function timeout() {
	console.log('TIMEOUT FIRED');
}, 10)
