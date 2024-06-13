console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

let x=13;
console.log(x.toString(2));  //decimal to binary
console.log(x.toString(8));  //decimal to octal
console.log(x.toString());  //without argument, it will convert to string

console.log(parseInt("1011",2));
console.log(parseInt("15",8));

console.log(typeof NaN);

//precesion of a number
const no=8.3286345;
console.log(no.toPrecision(4));
console.log(no.toFixed(4));

const zero=0;
const negZero=-0;
const posZero=+0;
console.log(zero,negZero,posZero);
console.log(zero==negZero);
console.log(zero===negZero);

//bigint
const no2=245873568273659872639845629837564237896578465872368746582736457826387568273645782638475628376458726387562837946587236589623487562837465872346578623874568927364589726389756283947658923765827n;
console.log(no2);
    //oorr
const no4=BigInt("263582634856823765876238956289374658726358762384756823765487263578623845628376458723645897236457862387456879234658723645786328475682374658273465897236458976234875632847568237465897236458762345876234897568923768723456");
console.log(no4);
console.log(0n==0);
console.log(0n===0);