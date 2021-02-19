// var x = "我是全局变量";　　　　//定义全局变量x
// function a(){　　　　　　　　　//定义函数类结构a　　
//     this.x = "我是在函数类结构a中声明的哦";    
// }
// //定义普通函数，弹出当前指针所包含的变量x的值
// function f(){
//     console.log(this.x);
// }
// // f();
// //返回值为“我是在函数类结构a中声明的哦”
// f.call(new a());

// f.call(new a())就是把函数（其实也是对象）f复制到被调用对象“new a()”下面去解析
function f(){    
    this.a ="a";    
    this.b = function(){    
        console.log("b");
    }
}
function e(){    
    f.call(this);     
}
var c = new e();
console.log(c.a);  //弹出a
c.b();    //弹出b
