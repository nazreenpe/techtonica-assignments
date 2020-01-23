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
Logs results of functions
*/
function main() {
    let meters = 15.6;
    const inches = meterToInches(meters);
    console.log(`${meters} meters = ${inches} inches`);


}

main();