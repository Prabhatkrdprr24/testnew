"use strict";  //to stop auto globals
var teacher="rahul kumar";
function fun(){
    var teacher="dprr";
    content="js";
    console.log("In fun "+teacher);
}
function gun(){
    var student="pk";
    console.log("welcome to class "+student,"your teacher is "+teacher);
}
fun();
gun();
console.log(teacher,content);