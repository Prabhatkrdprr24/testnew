    //Method-01 (TDZ)
function fun(){
    console.log(x);
    let x=10;
    console.log(x);
}
if(true){
    console.log(x);
    let x=10;
    console.log(x);
}
fun();

  //Method-02 (TDZ)
// console.log(x);
// let x=10;
// console.log(x);