'use strict';

$(document).ready(function (event) {

    $('#pick_num_form').submit(function (event) {
        //only submit inside this page, nowhere external
        event.preventDefault();
        //empty the entire div before running so previous returns aren't there
        $('#main').empty();
        //puts user input into a variable of same name
        var num_entry = $('#num_entry').val();
        //makes the string the user enters into a number
        num_entry = +num_entry;
        //my replacement code for ParseInt:
        if (Number.isNaN(num_entry)) {
            alert("That's not a number!");
            //return is the escape path for the program to not run fizzBuzzer anyway
            return;
        }

        if (num_entry % 1 != 0) {
            alert("Nice try, but we don't take decimals here. :)");
            return;
        }
        fizzBuzzer(num_entry);
    });

    function fizzBuzzer(num) {
        var i;
        //count to the provided number, incrementing by one
        for (i = 1; i <= num; i++) {
            //if the number is divisble by 15, print "FizzBuzz!"
            if (i % 15 === 0) {
                $('#main').append("<p>FizzBuzz!</p>");
            }
            //if the number is divisible by 5, print "Buzz"
            else if (i % 5 === 0) {
                $('#main').append("<p>Buzz</p>");
            }
            //if the number is divisible by 3, print "Fizz"
            else if (i % 3 === 0) {
                $('#main').append("<p>Fizz</p>");
            }
            //otherwise just print the number itself!
            else {
                $('#main').append("<p>" + i + "</p>");
            }
        }
    }

});
