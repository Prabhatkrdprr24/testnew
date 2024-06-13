console.log(Math.random());
  //generating random no between x and y
//  /** above function to generate below
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function generaterandom(x,y){
    return (Math.random()*(y-x+1))+x;  //range->[x,y+1)
}
generaterandom(3,8);