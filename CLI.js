var inquirer = require("inquirer");
var Game = require("./letterBlanks.js");
var game = new Game();
game.newWord();


function play () {
    console.log(game.guessLeft);
    console.log(game.blanks);
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter?"
        } 
    ]).then(function(answer) {
        var t = game.word;
        var ifCorrect = false;
        for (var i = 0; i < t.length; i++) {
            if(t[i]  === answer.guess) {
                ifCorrect = true;
            }
        }
        if (ifCorrect == true) {
            for (var i = 0; i < t.length; i++) {
                if (t[i] === answer.guess) {
                 game.blanks[i] = answer.guess;
                }
            }
        } else {
            game.guessLeft --;
        };
        if (game.guessLeft === 0) {
            console.log("You Lose");
            inquirer.prompt([
                {
                    name: "bob",
                    type: 'confirm',
                    message: "Do You Want to Play Again?"
                }
            ]).then(function (answer) {
                if (answer.bob) {
                    game.newWord();
                    game.guessLeft = 10;
                    play();
                }
            })
        } else if (game.word.toString() === game.blanks.toString()) {
            console.log("You Win");
            inquirer.prompt([
                {
                    name: "bob",
                    type: 'confirm',
                    message: "Do You Want to Play Again?"
                    
                }
            ]).then(function (answer) {
                if (answer.bob) {
                    game.newWord();
                    game.guessLeft = 10;
                    play();
                } else {
                    console.log("Goodbye");
                }
            });
        } else {
            play();
        }
        
      });
    }



play();