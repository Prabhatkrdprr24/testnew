// let button=document.getElementById(dp);
// function randomColor(){
//     let var2="1234567890abcdef";
//     let var1='#';
//     for(let i=0;i<6;i++){
//         var1+=var2[Math.floor(Math.random()*16)];
//     }
//     return var1;
// }
// function change(){
//     document.body.style.backgroundColor=randomColor();
// }

  //oorr

let btn=document.getElementById("dp");
function randomColor(){
    let var2="1234567890abcdef";
    let var1="#";
    for(let i=0;i<6;i++){
        var1+=var2[Math.floor(Math.random()*16)];
    }
    return var1;
}
function change(){
    document.body.style.backgroundColor=randomColor();
}
btn.addEventListener("click",change);

