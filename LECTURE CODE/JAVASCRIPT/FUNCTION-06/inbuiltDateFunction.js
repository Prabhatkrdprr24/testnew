const d=Date();
  //the Date() function returns a new string which has a date data
console.log(d);

  //to get date object we do new Date() which returns object having date releated property
const dt=new Date();
console.log(dt); 
console.log(dt.getDate());
console.log(dt.getMonth());  //0 based indexing
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getTime());