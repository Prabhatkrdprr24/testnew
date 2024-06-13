function processArray(arr,fn){
    for(let i=0;i<arr.length;i++){
        console.log(fn(arr[i]));
    }
}
// processArray([2,3,1,4],(x)=>{return x*x*x;});
  //oorr
// processArray([2,3,1,4],(x)=>x*x*x);  //valid when arrow function is 1 line and that  is return statenment
  //oorr
processArray([2,3,1,4],x=>x*x*x);  //valid when arrow function is 1 line and that  is return statenment and also 1 parameter