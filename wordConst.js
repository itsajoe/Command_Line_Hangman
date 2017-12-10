// The topic is high school stereotypes

var Word = function () {
    this.words = ["jock", "cheerleader", "goth", "introvert", "extrovert", "artist", "popular"];
    // Picks a word and splits it into an array
    this.item = "";
    this.theWord = function () {
        this.item = this.words[Math.floor(Math.random()*this.words.length)];
    };
};
module.exports = Word;


