function Parent(name) {
	this.name = name;
	this.colors = ['red', 'blue'];
}

Parent.prototype.getName = function () {
	console.log(this.name);
}

function Child (name, age) {
	Parent.call(this, name);
	this.age = age;
}

var f = function () {};
f.prototype = Parent.prototype;
Child.prototype = new F();

