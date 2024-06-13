function factorial(num) { 
    return Array.from({length: num}, function (_,i) {
        console.log(_,i)
        return i+1;
    }).reduce((acc, val) => acc * val, 1); 
}
console.log(factorial(5));
//https://github.com/singhsanket143/AsyncJSTutorial