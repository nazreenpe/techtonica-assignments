function checkNumber(num) {
    switch (num) {
        case 1:
            console.log("ONE");
            break;
        case 2:
            console.log("TWO");
            break;
        case 3:
            console.log("THREE");
            break;
        case 4:
            console.log("FOUR");
            break;
        case 5:
            console.log("FIVE");
            break;
        case 6:
            console.log("SIX");
            break;
        case 7:
            console.log("SEVEN");
            break;
        case 8:
            console.log("EIGHT");
            break;
        case 9:
            console.log("NINE");
            break;
        default:
            console.log("PLEASE TRY AGAIN");
    }
}

/*
 Takes  one parameter: a string, consisting of lowercase English alphabetic letters
  (i.e., a through z). It must return A, B, C, or D depending on the following 
  criteria:
    If the first character in string  is in the set {a, e, i, o, u}, then return A.
    If the first character in string  is in the set {b, c, d, f, g}, then return B.
    If the first character in string  is in the set {h, j, k, l, m}, then return C.
    If the first character in string  is in the set {n, p, q, r, s,t, v, w, z}, 
    then return D.
*/
function getLetter(s) {
    let letter = s[0];
    switch (letter) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            return 'A';
        case 'b': case 'c': case 'd': case 'f': case 'g':
            return 'B';
        case 'h': case 'j': case 'k': case 'l': case 'm':
            return 'C';
        default:
            return 'D';

    }
}

