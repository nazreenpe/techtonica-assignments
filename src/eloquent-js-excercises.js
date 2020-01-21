/*
Prints a triangle pattern with #
*/
function loopingTriangle() {
    let pattern = "", show = "#";
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j <= i; j++) {
            pattern += show;
        }
        pattern += "\n";
    }
    return pattern;
}

/*
prints numbers 1 to 100
if number is divisible by 3 : prints "Fizz"
if number is divisible by 5 : prints "Buzz"
if number is divisible by 3 and 5 : prints "FizzBuzz"
*/
function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");

        } else if (i % 5 == 0) {
            console.log("Buzz");

        } else {
            console.log(i);

        }
    }
}

/*
Creates a chessboard pattern of given binding size
@param bindingSize - number
@return pattern - string
*/
function chessboard(bindingSize) {
    let pattern = "", show = "";
    for (let i = 0; i < bindingSize; i++) {
        for (let j = 0; j < bindingSize; j++) {
            pattern += ((i + j) % 2 === 0) ? "#" : " ";
        }
        pattern += "\n";
    }
    return pattern;
}

/*
Takes two arguments and returns the minimum 
@param first, second - numbers
@return number
*/
function min(first, second) {
    return first > second ? first : second;
}

/*
Checks if a number is odd or even using recursion
@param n - a positive whole number
@return boolean
*/
function isEven(n) {
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n - 2);
}

/*
Takes a string argument and returns the number of uppercase “B” characters present
@param word - string
@return number
*/
function checkBs(word) {
    let letters = word.split('');
    let count = 0;
    for (const letter of letters) {
        count += (letter === 'B') ? 1 : 0;
    }
    return count;
}

/*
Takes a string and a character as arguments and returns the number of
the given character present
@param word - string
@param char - character
@return number
*/
function countChar(word, char) {
    let letters = word.split('');
    let count = 0;
    for (const letter of letters) {
        count += (letter === char) ? 1 : 0;
    }
    return count;
}

/*
Takes two arguments, start and end, and returns an array containing all 
the numbers from start up to (and including) end.
@param start, end - number
@return array
*/
function range(start, end) {
    let numbersInRange = [];
    for (let i = start; i <= end; i++) {
        numbersInRange.push(i);
    }
    return numbersInRange;
}

/*
Takes an array of numbers and returns the sum of these numbers.
@param numbers - array
@return number
*/
function sum(numbers) {
    let sumOfNumbers = 0;
    for (const n of numbers) {
        sumOfNumbers += n;
    }
    return sumOfNumbers;
}

/*
takes an array as argument and produces a new array
that has the same elements in the inverse order
@param inputArray - array
@return array
*/
function reverseArray(inputArray) {
    let reversedArray = [];
    for (const element of inputArray) {
        reversedArray.unshift(element);
    }
    return reversedArray;
}

/*
modifies the array given as argument by reversing its elements
@param inputArray - array
@return array
*/
function reverseArrayInPlace(inputArray) {
    let temp = [];
    const length = inputArray.length - 1;
    
    for (let i = 0; i <= length; i++) {
        const element = inputArray.pop();
        temp.push(element);
    }

    for (const element of temp) {
        inputArray.push(element);
    }
    return inputArray;
}