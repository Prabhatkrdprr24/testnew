function letReassignment(){
    let x=10;
    console.log(x);
    x=20;
    console.log(x);
}
function constReassignment(){
    const x=10;
    console.log(x);
    x=20;  //x is const so we cannot reassign value in x so it will throw error
    console.log(x);
}
function obj1Reassignment(){
    const obj1={x:10,y:20};
    console.log(obj1);
    x={a:20};  //obj is const so we cannot reassign value in obj so it will throw error
    console.log(obj1);
}
function obj2Reassignment(){
    const obj1={x:10,y:20};
    console.log(obj1);
    obj1.x=30;
    obj1.z=40;
    console.log(obj1);
}
function obj3Reassignment(){
    const obj1={x:10,y:20};
    console.log(obj1);
    const obj3=obj1;
    obj3.x=30;
    obj3.z=40;
    console.log(obj1);
    console.log(obj3);
}
obj3Reassignment();