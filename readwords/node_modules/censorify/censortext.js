"use strict";

var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
    censoredWords.forEach(function (element) {
        inStr = inStr.replace(element, "****");
    });

    customCensoredWords.forEach(function (element) {
        inStr = inStr.replace(element, "****");
    });

    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
