function fun(){
    console.log("called the function fun");
    return function cleanup(){
        console.log("cleaning up the resource");
    }
}
const result=fun();
console.log(result);
result();