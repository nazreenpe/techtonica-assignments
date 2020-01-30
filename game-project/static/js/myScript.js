function generateRandom() {
    return Math.floor(Math.random() * 100);
}

function checkNumberMatch(guess, random) {
    return guess == random;
}

$(document).ready(function () {
    let random;
    $("#start-button").click(function () {
        random = generateRandom();
        $(".text-response").html('');
    });


    $('#guess').keypress(function (e) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            let guess = $("#guess").val();
            let isMatch = checkNumberMatch(guess, random);
            if (isMatch) {
                $(".text-response").html("Yaay! Right guess. Congratulations");
            } else {
                if (guess > random) {
                    $(".text-response").html("Your guess is larger than the hidden number")
                } else {
                    $(".text-response").html("Your guess is smaller than the hidden number");
                }
            }
            $('#guess').val('');
        }

    });

});
