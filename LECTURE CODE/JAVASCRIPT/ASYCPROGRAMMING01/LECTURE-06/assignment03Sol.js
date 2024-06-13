function createPromise(time){
    return new Promise((res,rej)=>{
        setTimeout(function fun(){
            res(time);
        },time);
    })
}
createPromise(10000) 
.then(download())
.then(upload)