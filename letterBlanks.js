var Letter = require("./letterConst.js");
var inquirer = require("inquirer");

var Game = function (input) {
    this.word = [];
    this.blanks = [];
    this.guessLeft = 10;
    this.newWord = function () {
        this.word = [];
        this.blanks = [];
        var piece = new Letter();
        piece.getSplit();
        this.word = piece.split; 
        var t = this.word;
        
        for (let i = 0; i < t.length; i++) {
        this.blanks.push("_");
        }
    };
    
    };


module.exports = Game;

