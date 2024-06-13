function processArray(arr,fn){
    for(let i=0;i<arr.length;i++){
        console.log(fn(arr[i]));
    }
}
processArray([2,3,1,4],function cube(x){return x*x*x;})