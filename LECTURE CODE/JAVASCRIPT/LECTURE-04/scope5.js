function fun(){  //global scope
    if(true){
        var x=10;  //function scope
        let y=20;  //if block scope
    }
    console.log(x);
    console.log(y);
}
fun();
