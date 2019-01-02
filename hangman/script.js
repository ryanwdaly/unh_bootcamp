$(document).ready(function() {
    var target_word = getRandomWord();
    var lives_left = 10;
    var guessed_letters = [];

    target_word = target_word.split('');

    renderDisplay();

    document.onkeyup = function(event) {
        var input = event.key.toLowerCase();
        
        if (checkLetter(input) == true) {
           
        }
        else {
            lives_left--;  
        }

        guessed_letters.push(input);
        renderDisplay();

        if (hasWon() == true) {
            alert("you've won!");
        }
        if (hasLost() == true) {
            alert("you've lost!");
        }
        
        //Warn user before reloading
        window.onbeforeunload = function(event) {
            event.return;
        }
    }

//---------HELPER_FUNCTIONS----------//


    //access word-text file and pick random line, return line as string
    function getRandomWord(){

        random_word = "example"
        return random_word;
    }
    function renderDisplay() {
        //target-word
        // $("#target-word").text(target_word.join(''));
        //guesses-left
        // arr = [];

        $(".hearts").remove();
        for (i = 0; i < lives_left; i++) {

            $("#guesses-left").append('<img class="hearts" src="assets/images/heart.png" />');
        }
    
        $("#progress-display").text(renderWord());
    }

    function renderWord() {
        var display_arr = [];

        for(i = 0; i < target_word.length; i++) {
            if (guessed_letters.includes(target_word[i])) {
                display_arr.push(target_word[i]);
            }
            else {
                display_arr.push("_");
            }
        }
        return display_arr.join('');
    }

    //Returns true if user isn't being a dangus.
    function validInput() {

    }
    
//DONE
    //Checks whether input is correct
    function checkLetter(input) {
        var has_letter = false; 
        for(i = 0; i <= target_word.length; i++) {
            if(input == target_word[i]) {
                has_letter = true;
            }
        }
        return has_letter;
    }

    function randomInt() {
        min = Math.ceil(0);
        max = Math.floor(61336);
        return Math.floor(Math.random() * (61336 + 1));
    }

    function hasWon() {
        var has_won = true;
        for(i = 0; i < target_word.length; i++) {
            if(!guessed_letters.includes(target_word[i])) {
                has_won = false;
            }
        }
        return has_won;
    }

    function hasLost() {
        var has_lost = false;
        if (lives_left <= 0) {
            has_lost = true;
        }
        
        return has_lost;
    }
});