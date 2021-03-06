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

function calculateSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/*
Takes an input number n and prints numbers 1 to n
if number is divisible by 3 : prints "Fizz"
if number is divisible by 5 : prints "Buzz"
if number is divisible by 3 and 5 : prints "FizzBuzz"
@param n - number
*/
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
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
Find factorial of a given number and returns the value
@param n - number
@return number
*/
function findFactorial(n) {
    if (n === 1 || n === 0) return 1;
    return n * findFactorial(n - 1);
}

/*
Takes two boolean parameters. The parameter weekday is True if it is a weekday, and the
 parameter vacation is True if we are on vacation. We sleep in if it is not a weekday
or we're on vacation. Return True if we sleep in.
@param weekday, vacation - boolean
@return boolean
*/
function sleep_in(weekday, vacation) {
    switch (true) {
        case !weekday && !vacation:
            break;
        case vacation:
            break;
        default:
            return false;
    }
    return true;
}

/*
Takes 2 arrays of ints, a and b, return True if they have the same first element or 
they have the same last element. Both arrays will be length 1 or more.
@param a, b - arrays of integers
@return boolean
*/
function common(a, b) {
    return (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) ? true : false;
}

/*
Practice  creatingobjects, loging them and remove key-value pairs in objects
*/
function objectsAndKeysChallenge() {
    let person = {
        title: "Olympian",
        fName: "Ibtihaj",
        lName: "Mohammed",
        name: () => {
            return this.fName + " " + this.lName;
        },
        job: "Fencer",
        country: "USA"
    };
    console.log(person);
    delete person.fName;
    console.log(person);
}

/*
practice array of objects
*/
function mutatingObjects() {
    let sheros = [
        {
            name: "Ibtihaj Mohammed",
            career: 'Sports - Fencing'
        },
        {
            name: 'Manal A Rostam',
            career: 'Sports - runner'
        },
        {
            name: 'Halima Aden',
            career: "Modelling"
        },
        {
            name: 'Hasna Habeeb',
            career: "Teacher"
        }
    ];

    console.log(sheros);

    mutateSecondKeys(sheros);
    console.log(sheros);

}

function mutateSecondKeys(items) {
    for (const item of items) {
        let itemKeys = Object.keys(item);
        console.log(itemKeys[1]);
        Object.defineProperty(item, "expertise", Object.getOwnPropertyDescriptor(item, itemKeys[1]));
        delete item[itemKeys[1]];
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
    let n = Math.floor(Math.random() * 20);
    loopThrough(n);
    console.log(`Sum of numbers from 0 to ${n} is ${calculateSum(n)}`);
    fizzbuzz(30);
    console.log(`Factorial of ${n} is ${findFactorial(n)}`);
    console.log(sleep_in(false, false));
    console.log(sleep_in(true, false));
    console.log(sleep_in(false, true));
    console.log(common([1, 2, 3], [7, 3]));
    console.log(common([1, 2, 3], [1, 0]));
    console.log(common([1, 2, 3], [7, 3, 2]));
    objectsAndKeysChallenge();
    mutatingObjects()
}

main();