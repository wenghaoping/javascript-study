for (var i = 0; i < 5; i++) {
	setTimeout(function() {
		~function(i){
			return function() {
				console.log(i);
			}
		}()
	}, 1000*i);

}
