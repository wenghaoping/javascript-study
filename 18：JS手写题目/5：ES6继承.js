//class 相当于es5中构造函数
//class中定义方法时，前后不能加function，全部定义在class的protopyte属性中
//class中定义的所有方法是不可枚举的
//class中只能定义方法，不能定义对象，变量等
//class和方法内默认都是严格模式
//es5中constructor为隐式属性


class People{
    constructor(name='wang', age='27') {
      this.name = name;
      this.age = age;
    }
    eat(){
      console.log(`${this.name} ${this.age} eat food`)
    }
  }
  //继承父类
  class Woman extends People{ 
     constructor(name = 'ren', age = '27'){ 
       //继承父类属性
       super(name, age); 
     } 
      eat(){ 
       //继承父类方法
        super.eat() 
      } 
  } 
  let wonmanObj = new Woman('xiaoxiami'); 
  wonmanObj.eat();
  
//es5继承先创建子类的实例对象，然后再将父类的方法添加到this上（Parent.apply(this)）。 
//es6继承是使用关键字super先创建父类的实例对象this，最后在子类class中修改this。