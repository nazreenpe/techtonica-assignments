// Given a non-empty array of integers, every element appears twice
//  except for one. Find that single one.

function findSingleNumber(numbers) {
    let numberAndCount = {};

    for(const number of numbers) {
        if(numberAndCount[number] === null) {
            numberAndCount[number] = 1;
        } else {
            numberAndCount[number] = numberAndCount[number] + 1;
        }
    }
    
    for(key in numberAndCount) {
        if(numberAndCount[key] === 1) {
            return key;
        }
    }
}