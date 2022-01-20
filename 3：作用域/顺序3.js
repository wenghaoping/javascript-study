var myObj = {
    name : " AAAA ", 
    showThis: function(){
        console.log(this)
        function bar(){
            console.log(this)
        }
        bar()
    }
}
myObj.showThis()