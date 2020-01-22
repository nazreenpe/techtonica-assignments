/*
Takes an array of array as input. Each sub-array should have two strings as 
elements: The 0th element should be a person's name and the 1st element should be 
that person's most desired vacation destination.
And prints each person's name and desired destination in a complete sentence
*/
function printVacations(namesAndDestinations) {
    for (const nameAndDestination of namesAndDestinations) {
        let name = nameAndDestination[0];
        let destination = "";
        for (let i = 1; i < nameAndDestination.length; i++) {
            if (nameAndDestination[1][0].length > 1) {
                for (let j = 0; j < nameAndDestination[i].length; j++) {
                    destination += `${nameAndDestination[i][j]}`;
                    if (j !== nameAndDestination[i].length - 1) {
                        destination += " or ";
                    }
                }
            } else {
                destination += ` ${nameAndDestination[i]}`;
            }

        }
        console.log(`${name} really wants to go to ${destination}.`);
    }
}

// Testing printVacation function
let data = [['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London']];
printVacations(data);
console.log();
let input = [['Tammy', ['Tahiti', 'Bali', 'Hawaii']], ['Erin', ['Banff, Alberta, Canada', 'Iceland']], ['Janet', ['London', 'Hogwarts']]];
printVacations(input);
console.log();

/*
prints the multiplication of a given number
@param num - number
*/
function multiplicationTable(num) {
    console.log(`Multiplication table of ${num}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

multiplicationTable(6);

/*
It takes a string, , consisting of lowercase English alphabetic letters (i.e., a through z).
And first, print each vowel in  on a new line, in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
*/
function vowelsAndConsonents(s) {
    let letters = s.split('');
    let vowels = [], consonents = [];
    for (const letter of letters) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vowels.push(letter);

        } else {
            consonents.push(letter);
        }
    }

    for (const vowel of vowels) {
        console.log(vowel);

    }

    for (const consonent of consonents) {
        console.log(consonent);

    }

}
vowelsAndConsonents("javascriptloops");