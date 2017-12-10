var Word = require("./wordConst.js");
var Letters = function () {
    // Split letters into array and save as an array
    this.split = [];
    this.getSplit = function () {
        var the = new Word();
        the.theWord();
        var item = the.item;
        this.split = item.split("");
    }
};
module.exports = Letters;