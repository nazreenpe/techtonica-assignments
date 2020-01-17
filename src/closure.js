function createCounter(startingValue) {
    var counter = startingValue;
    var resultObject = {
        getValue: function () {
            return counter;
        },
        increment: function () {
            counter += 1;
        },
        name: "Hello World!",
        double: function () {
            counter += 2;
        }
    };
    return resultObject;
}

function aboutMe(name, place, hobby) {
    let about = {
        getName: function () {
            return name;
        },
        getPlace: () => {
            return place;
        },
        getHobby: () => {
            return hobby;
        }
    };
    return about;
}

