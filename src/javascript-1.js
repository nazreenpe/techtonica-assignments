/*
@param  firstOperand - number
@param secondOperand - number  
@param operator - string representing a mathematical operator
@return result - string representing result of math operation
*/

function calculate(firstOperand, operator, secondOperand) {
    let result = "";
    switch(operator) {
        case "+" : result = `Sum of ${firstOperand} and ${secondOperand} is: ${firstOperand + secondOperand}`;
                    break;
        case "*" : result = `Product of ${firstOperand} and ${secondOperand} is: ${firstOperand * secondOperand}`;
                    break;
        case "/" : result = `Quotient of ${firstOperand} / ${secondOperand} is: ${firstOperand / secondOperand}`;
                    break;
        case "-" : result = `Difference between ${firstOperand} and ${secondOperand} is: ${firstOperand - secondOperand}`;
                    break;
        case "%" : result = `Reminder of ${firstOperand} and ${secondOperand} is: ${firstOperand % secondOperand}`;
                    break;
        case "min" : result = `Minimum of ${firstOperand} and ${secondOperand} is: ${Math.min(firstOperand, secondOperand)}`;
                    break;
        case "max" : result = `Maximum of ${firstOperand} and ${secondOperand} is: ${Math.max(firstOperand, secondOperand)}`;
                    break;
        default : result = "Invalid operation or operands";
    }
    return result;
}

/* 
* Finds the number which has highest square and returns it
*
* @param first - integer
* @param second - integer
* @result integer     
*/
function squareMax(first, second) {
    return ((Math.pow(first,2)) > (Math.pow(second,2)))? first : second; 
}
