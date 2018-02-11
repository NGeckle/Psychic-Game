// Set win and lose to 0, guess to 9, and made guessed an empty array.
var win = 0;
var lose = 0;
var guess = 9;
var guessed = [];


    document.onkeyup = function(event) {
        //Adding variable for each of the id's from the html.
        var winText = document.getElementById("win-text");
        var loseText = document.getElementById("lose-text");
        var guessText = document.getElementById("guess-text");
        var guessedText = document.getElementById("guessed-text");

        
        //userGuess is what key the person presses.
        var userGuess = event.key;
        // Array of letter choices for randomizer.
        var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        if (userGuess === computerGuess) {
            //Adds point to win if guessed correctly.
            win++;
            //Resets gesses upon winning a point.
            guess = 9;
            //Resets what has been guessed upon winning a point.
            guessed = [];
        }

        else {
            //If guessed wrong lower guess amount by 1.
            guess--;
        }

        if (guess === 0) {
            //If guesses reach 0 add point to lose.
            lose++;
            //Resets guesses upon losing a point.
            guess = 9;
            //Resets what has been guessed upon losing a point.
            guessed = [];
        }

        //Add what has been guessed to the  guessed array.
        guessed.push(userGuess);
        //Change text on screen when a letter is guessed, and puts a comma in between.
        guessedText.textContent = guessed.join(", ");
        //Changes text for win, lose, and guess.
        winText.textContent = win;
        loseText.textContent = lose;
        guessText.textContent = guess;
        
    }
   