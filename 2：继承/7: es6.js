class Parent {
    constructor(x, y) {
      this.x = x;
      this.y = y
    }
  }
class Child extends Parent {
  constructor(x, y, name) {
    super(x, y);//调用父类的constructor(x,y)
    this.name = name;
  }
}
var child1 = new Child("x", "y", "ccg");
console.log(child1);　　//Child {x: "x", y: "y", name: "ccg"}


// 父类
class Person {
    constructor(name){
        console.log(`构造函数执行了,${name}`)
        this.name=name
    }
    showName(){
        return `名字为${this.name}`
    }
}
let p1= new Person('jona');
console.log(p1.showName);

// 子类
class children  extends Person{
    constructor(ags){
        super(ags) 
    }
 
 showName (){
        super.showName()//调用父级的方法也是用super
    }
}
let p2 = new children('子类')