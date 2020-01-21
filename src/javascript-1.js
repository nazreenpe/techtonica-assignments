/*
* Performs mathematical operation on the two operand parameters, based on the operator argument. 
* @param  firstOperand - number
* @param secondOperand - number  
* @param operator - string representing a mathematical operator
* @return result - string representing result of math operation
*/

function calculate(firstOperand, operator, secondOperand) {
    switch (operator) {
        case "+":
            return `Sum of ${firstOperand} and ${secondOperand} is: ${firstOperand + secondOperand}`;
        case "*":
            return `Product of ${firstOperand} and ${secondOperand} is: ${firstOperand * secondOperand}`;
        case "/":
            return `Quotient of ${firstOperand} / ${secondOperand} is: ${firstOperand / secondOperand}`;
        case "-":
            return `Difference between ${firstOperand} and ${secondOperand} is: ${firstOperand - secondOperand}`;
        case "%":
            return `Reminder of ${firstOperand} and ${secondOperand} is: ${firstOperand % secondOperand}`;
        case "min":
        case "MIN":
        case "MINIMUM":
        case "minimum":
            return `Minimum of ${firstOperand} and ${secondOperand} is: ${Math.min(firstOperand, secondOperand)}`;
        case "max":
        case "MAX":
        case "MAXIMUM":
        case "maximum":
            return `Maximum of ${firstOperand} and ${secondOperand} is: ${Math.max(firstOperand, secondOperand)}`;
        default:
            return "Invalid operation or operands";
    }
}

/* 
* Finds the number which has highest square and returns it
*
* @param first - integer
* @param second - integer
* @return integer     
*/
function squareMax(first, second) {
    return ((Math.pow(first, 2)) > (Math.pow(second, 2))) ? first : second;
}


/*
* Performs array operations and prints an array and its length.
* @param array
* @return array
*/
function printCuteAnimals(animals) {
    let cuteAnimals = [];
    for (const index in animals) {
        if (index % 2 == 0) {
            cuteAnimals.push(animals[index]);
        }
    }
    console.log(`cute animals are: ${cuteAnimals}\n`);
    console.log(`Animals are : ${animals.join(" ")}.\n And its length is : ${animals.length}\n`);
    animals.pop();
    console.log(`Animals after popping an animal out are : ${animals.join(" ")}.\n And its length is ${animals.length}\n`);
    const concatinatedAnimals = animals.concat(['rabbit', 'panda', 'tiger']);
    console.log(`Conactinated Animals, stored to a another variable : \n${concatinatedAnimals.join(" ")}.\n And its length is ${concatinatedAnimals.length}\n`);
    console.log(`Animals after concatinating more animals to it : \n${animals.join(" ")}.\n And its length is ${animals.length}\n`);
    return animals;
}

