var data = [];

for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
        return function(){
            console.log(i);
        }
  })(i);
}

data[0]();
data[1]();
data[2]();

for (var i = 0; i < 3; i++) {
  data[i] = function(){
    console.log(i);
  };
}
data[0]();
data[1]();
data[2]();
