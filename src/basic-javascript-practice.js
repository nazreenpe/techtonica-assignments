/*
Takes an input of the number of meters and outputs the result of the number of inches.
@param meters - number
@return number
*/
function meterToInches(meters) {
    const oneMeterInInches = 39.3701;
    return meters * oneMeterInInches;
}

/*
Takes an argument that is a number, loops through and displays a message “Hello World”
 that number of times.
 @param number n
*/
function loopThrough(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello World");
    }
}






/*
Logs results of functions
*/
function main() {
    let meters = 15.6;
    const inches = meterToInches(meters);
    console.log(`${meters} meters = ${inches} inches`);
    console.log();
    let n = 4;
    loopThrough(n);
    

}

main();