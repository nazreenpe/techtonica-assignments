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
            destination += `${nameAndDestination[i]}, `;
        }
        console.log(`${name} really wants to go to ${destination}`);
    }
}

let data = [['Tammy', 'Tahiti'], ['Erin', 'Banff, Alberta, Canada'], ['Janet', 'London']];
printVacations(data);