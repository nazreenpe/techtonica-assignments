/*
* Takes in an  array which contains 3 strings, and each string must be one of the names
- [Priya, Ming, David, Alex, Breanne] - who are interested in going to the movies.

* These are the rules for creating the group
- Priya will attend only if Ming goes.
- David loves popcorn and will go to the movies under any circumstance
- Alex will automatically go to the movies if David goes, and will automatically not go to the movies if David does not go
- Ming will not attend if David has already said he is attending and Ming will say yes if Priya says yes.
-Breanna loves to be around people and will only go if there are at least 2 others going
*/
function movieNight(friends) {
    let movieGoers = [];
    if ((friends.includes("Ming") || friends.includes("Priya"))
        && !friends.includes("David")) {
        movieGoers.push("Priya", "Ming");
    }
    if (friends.includes("David")) {
        movieGoers.push("David", "Alex");
    }
    if (movieGoers.length >= 2) {
        movieGoers.push("Breanne");
    }
    return movieGoers;
}

/*
Takes in a score and generates a grade based on the conditions
@param score - number
@result grade - number
*/
function getGrade(score) {
    let grade;
    if (score > 25 && score <= 30) grade = 'A';
    else if (score > 20 && score <= 25) grade = 'B';
    else if (score > 15 && score <= 20) grade = 'C';
    else if (score > 10 && score <= 15) grade = 'D';
    else if (score > 5 && score <= 10) grade = 'E';
    else if (score > 0 && score <= 5) grade = 'F';
    else grade = 'Invalid score';
    return grade;
}

