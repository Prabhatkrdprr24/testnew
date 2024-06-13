// let var2=document.getElementById("dis");
// var2.innerText="0";
function incrementer(){
    let var2=document.getElementById("dis");
    let val=parseInt(var2.innerText);
    var2.innerText=val+1;
}
function decrementer(){
    let var2=document.getElementById("dis");
    let val=parseInt(var2.innerText);
    if(val==0){
        alert("cannot decrease");
        var2.innerText=0;
    }
    else var2.innerText=val-1;
}
function reseter(){
    let var2=document.getElementById("dis");
    let val=parseInt(var2.innerText);
    var2.innerText=0;
}