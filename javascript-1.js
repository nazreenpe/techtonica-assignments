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
        case ("MIN"): result = `Minimum of ${firstOperand} and ${secondOperand} is: ${Math.min(firstOperand, secondOperand)}`;
                    break;
        case ("MAX") : result = `Maximum of ${firstOperand} and ${secondOperand} is: ${Math.max(firstOperand, secondOperand)}`;
                    break;
        case ("SQRT") : result = `Square root of ${firstOperand} is ${Math.sqrt(firstOperand)}`;
                    break;
        default : result = "Invalid operation or operands";
    }
    return result;
}
