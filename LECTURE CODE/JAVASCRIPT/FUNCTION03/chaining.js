const obj={
    func1:function f(x){
        console.log("f called");
        return {
            func2:function g(){
                console.log("g called");
            }
        }
    }
}
console.log(obj.func1(10));
obj.func1(10).func2();